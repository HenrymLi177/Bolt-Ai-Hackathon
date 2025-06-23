import React from 'react';
import { XCircle, ArrowLeft, RefreshCw, HelpCircle } from 'lucide-react';

const CancelPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cancel Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your payment was cancelled and no charges were made to your account. 
            You can try again or explore our free resources.
          </p>
        </div>

        {/* Information Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happened?</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Your payment process was interrupted or cancelled before completion.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                No charges have been made to your payment method.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Your course access remains unchanged.
              </p>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Would You Like To Do?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Try Again</h3>
              <p className="text-gray-600 text-sm">
                Return to the course page and attempt the purchase again.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ArrowLeft className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Browse Courses</h3>
              <p className="text-gray-600 text-sm">
                Explore our full catalog of courses and learning paths.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Help</h3>
              <p className="text-gray-600 text-sm">
                Contact our support team if you experienced any issues.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Courses</span>
          </button>
          
          <button
            onClick={() => window.location.href = '/community'}
            className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
          >
            Explore Free Resources
          </button>
        </div>

        {/* Support */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Having trouble with your purchase? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@techedu.com"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Email Support
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a
              href="/faq"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;