import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../button/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { selectPublicKey } from '../../store/stripe/stripe.select';
import { fetchPublishableKeyStart } from '../../store/stripe/stripe.action';
function Payment() {
const [stripePromise, setStripePromise] = useState(null);
  useEffect(() => {
    fetch('/config').then(async r => {
      const { publishableKey } = await r.json();
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  return (
    <>
      <Elements stripe={publicKey}>
        <CheckoutForm />
      </Elements>
    </>
  );
}

export default Payment;
