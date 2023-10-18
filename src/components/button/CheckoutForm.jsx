import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { FormContainer, Button, Message } from './checkoutForm.style';
export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <FormContainer id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? 'Processing ... ' : 'Pay now'}
        </span>
      </Button>
      {/* Show any error or success messages */}
      {message && <Message id="payment-message">{message}</Message>}
    </FormContainer>
  );
}
