import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/payments?email=${user.email}`
      );
      const data = response.data;
      setPaymentHistory(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center font-bold text-4xl my-10">Payment History</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>TransactionId</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={payment.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <p>{payment.className}</p>
                  </div>
                </td>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
