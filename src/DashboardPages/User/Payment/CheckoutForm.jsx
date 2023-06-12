import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useSelectedClass from "../../../hooks/useSelectedClass";

const CheckoutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [selectedClass, refetch] = useSelectedClass();
  //   todo
  const payPrice = 100;

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
      // save payment info
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: payPrice,
        date: new Date(),
        // quantity: cart.length,
        selectedClass: selectedClass.map((item) => item._id),
        // menuItems: cart.map((item) => item.menuItemId),
        // status: "service pending",
        // itemNames: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res);
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
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 ml-8">{cardError.message}</p>}
      {/* {transactionId && (
        <p className="text-green-500 ml-8">
          Transaction complete with transaction ID: {transactionId}
        </p>
      )} */}
    </div>
  );
};

export default CheckoutForm;
