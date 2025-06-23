export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_SY46Rzf84sCXuh',
    priceId: 'price_1RcxxpB4TclDueTYhs6HxZEs',
    name: 'Full-Stack Web Developer',
    description: 'Master both frontend and backend development with modern technologies. Build complete web applications from scratch.',
    mode: 'payment'
  }
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};

export const getProductById = (id: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.id === id);
};