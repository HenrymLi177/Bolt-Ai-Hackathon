import React, { useState } from 'react';
import { X, CreditCard, Lock, Check, AlertCircle, Loader2 } from 'lucide-react';
import { Course } from '../types/Course';
import { LearningPath } from '../types/LearningPath';
import { useAuth } from '../contexts/AuthContext';
import { stripeProducts, getProductById } from '../stripe-config';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Course | LearningPath | null;
  type: 'course' | 'path';
  onPaymentSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  isOpen, 
  onClose, 
  item, 
  type, 
  onPaymentSuccess 
}) => {
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen || !item) return null;

  // Find the corresponding Stripe product
  const stripeProduct = stripeProducts.find(product => 
    product.name === item.title || 
    (type === 'path' && product.name === 'Full-Stack Web Developer' && item.title === 'Full-Stack Web Developer')
  );

  if (!stripeProduct) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Available</h2>
            <p className="text-gray-600 mb-6">This product is not currently available for purchase.</p>
            <button
              onClick={onClose}
              className="w-full bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!user) {
      setError('Please sign in to continue');
      return;
    }

    setProcessing(true);
    setError('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: stripeProduct.priceId,
          mode: stripeProduct.mode,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/cancel`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err: any) {
      console.error('Checkout error:', err);
      setError(err.message || 'Failed to start checkout process');
    } finally {
      setProcessing(false);
    }
  };

  const tax = Math.round(item.price * 0.08 * 100) / 100; // 8% tax
  const total = item.price + tax;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex">
          {/* Left Side - Order Summary */}
          <div className="w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Order Summary</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">
                  {type === 'course' ? 'Individual Course' : 'Learning Path'}
                </p>
                
                {type === 'path' && 'courses' in item && (
                  <div className="mb-4">
                    <p className="text-sm text-white/80 mb-2">Includes {item.courses.length} courses:</p>
                    <div className="text-xs text-white/70 space-y-1">
                      {item.courses.slice(0, 3).map((_, index) => (
                        <div key={index}>• Course {index + 1}</div>
                      ))}
                      {item.courses.length > 3 && (
                        <div>• +{item.courses.length - 3} more courses</div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center text-2xl font-bold">
                  <span>Price:</span>
                  <span>${item.price}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${item.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${tax}</span>
                </div>
                <div className="border-t border-white/20 pt-3 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Lifetime access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Payment */}
          <div className="flex-1 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Purchase</h2>
              <p className="text-gray-600">Secure payment powered by Stripe</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800 font-semibold">Payment Error</span>
                </div>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Product Details */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What's Included</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Full access to all course materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Downloadable resources and code samples</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Community access and support</span>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-semibold">Secure Payment</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Your payment information is encrypted and secure. Powered by Stripe.
                </p>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={processing || !user}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : !user ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Please Sign In</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>Proceed to Checkout - ${total}</span>
                  </>
                )}
              </button>

              {!user && (
                <p className="text-center text-gray-600 text-sm">
                  You need to be signed in to make a purchase
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;