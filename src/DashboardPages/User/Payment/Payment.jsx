import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const Payment = () => {
  // const [cart] = useCart();
  // const total = cart.reduce((sum, item) => item.price + sum, 0);
  // const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <div>
        <SectionTitle
          subHeading="Please process"
          heading="Payment"
        ></SectionTitle>
        <div className="w-2/5 mx-auto text-center">
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
