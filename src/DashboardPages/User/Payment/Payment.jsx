import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useSelectedClass from "../../../hooks/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const Payment = () => {
  const payment = useParams();
  const [selectedClass] = useSelectedClass();
  const selectedPayment = selectedClass.find((item) => item._id === payment.id);

  return (
    <div>
      <div>
        <div className="w-2/5 mx-auto text-center">
          <Elements stripe={stripePromise}>
            <CheckoutForm selectedPayment={selectedPayment}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
