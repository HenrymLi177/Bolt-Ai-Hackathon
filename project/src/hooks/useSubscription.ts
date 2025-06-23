import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { getProductByPriceId } from '../stripe-config';

interface SubscriptionData {
  customer_id: string;
  subscription_id: string | null;
  subscription_status: string;
  price_id: string | null;
  current_period_start: number | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
}

export const useSubscription = () => {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchSubscription();
    } else {
      setSubscription(null);
      setLoading(false);
    }
  }, [user]);

  const fetchSubscription = async () => {
    if (!user) return;

    setLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('stripe_user_subscriptions')
        .select('*')
        .maybeSingle();

      if (fetchError) {
        console.error('Error fetching subscription:', fetchError);
        setError('Failed to fetch subscription data');
      } else {
        setSubscription(data);
      }
    } catch (err) {
      console.error('Error fetching subscription:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getSubscriptionPlan = () => {
    if (!subscription || !subscription.price_id) {
      return null;
    }

    const product = getProductByPriceId(subscription.price_id);
    return product ? product.name : 'Unknown Plan';
  };

  const isActive = () => {
    return subscription?.subscription_status === 'active';
  };

  const isTrialing = () => {
    return subscription?.subscription_status === 'trialing';
  };

  const isCancelled = () => {
    return subscription?.subscription_status === 'canceled';
  };

  const isPastDue = () => {
    return subscription?.subscription_status === 'past_due';
  };

  const getCurrentPeriodEnd = () => {
    if (!subscription?.current_period_end) return null;
    return new Date(subscription.current_period_end * 1000);
  };

  return {
    subscription,
    loading,
    error,
    refetch: fetchSubscription,
    getSubscriptionPlan,
    isActive,
    isTrialing,
    isCancelled,
    isPastDue,
    getCurrentPeriodEnd,
  };
};