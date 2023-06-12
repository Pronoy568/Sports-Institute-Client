import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { ImSpinner10 } from "react-icons/Im";
import SectionTitle from "../../../components/SectionTitle";

const CheckoutForm = ({ selectedPayment }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [selectedClass] = useSelectedClass();
  const { _id, price, img, className, availableSeats } = selectedPayment;
  //   todo
  const payPrice = price;

  useEffect(() => {
    if (payPrice) {
      axiosSecure
        .post("/create-payment-intent", { price: payPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [payPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);
    //   confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment info
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        _id,
        className,
        img,
        price,
        availableSeats,
        date: new Date(),
        selectedPayment,
        selectedClass: selectedClass.map((item) => item._id),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.result.insertedId) {
          // display confirm
          setProcessing(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Enrolled SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
    // }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold my-4">{`Payment for ${className} Class`}</h1>
        <img className="w-2/4 mx-auto rounded" src={img} alt={className} />
        <h1 className="text-xl">Price: ${price}</h1>
      </div>
      <SectionTitle heading="Payment"></SectionTitle>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="px-4 py-2 rounded-lg bg-slate-300 "
          type="submit"
          disabled={!stripe || processing || !clientSecret}
        >
          {processing ? (
            <ImSpinner10 className="m-auto animate-spin" size={24} />
          ) : (
            `Pay $${price}`
          )}
        </button>
      </form>
      {cardError && <p className="text-red-500 ml-8">{cardError.message}</p>}
      {transactionId && (
        <p className="text-green-500 ml-8">
          Transaction complete with transaction ID: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
