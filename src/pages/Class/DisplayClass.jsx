import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import Swal from "sweetalert2";
// import useClass from "../../hooks/useClass";

const DisplayClass = ({ Class }) => {
  const {
    className,
    instructorName,
    img,
    availableSeats,
    numberStudent,
    price,
    _id,
  } = Class;
  const { user } = useAuth();
  const [, refetch] = useSelectedClass();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [disable, setDisable] = useState(false);
  // const [allClass] = useClass();

  const handleAddToSelectedClass = (item) => {
    // let reduceSeat = availableSeats - 1;
    // allClass.filter((classItem) => {
    //   if (classItem.className === item.className) {
    //     reduceSeat = classItem.availableSeats--;
    //   }
    // });

    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        className,
        img,
        price,
        availableSeats,
        email: user.email,
      };
      fetch("http://localhost:5000/selectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Selected class Successfully !!!",
              showConfirmButton: false,
              timer: 1500,
            });
            setDisable(true);
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Selected class",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="my-4">
      <div className="rounded-xl p-4 w-96 bg-base-200 hover:bg-white shadow-2xl">
        <figure>
          <img className="rounded-xl w-full h-72" src={img} alt={className} />
        </figure>
        <div className="p-4">
          <h2 className="text-2xl mb-3 font-semibold">{className}</h2>
          <p className="text-xl">
            <span className="font-semibold">Instructor:</span> {instructorName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Total Student:</span>{" "}
            {numberStudent}
          </p>
          <p className="text-xl">
            <span className="font-semibold">AvailableSeats:</span>{" "}
            {availableSeats}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Price:</span> ${price}
          </p>
        </div>
        <div className="text-center">
          {isAdmin || isInstructor ? (
            <>
              <button className="btn" disabled="disabled">
                Select
              </button>
            </>
          ) : disable ? (
            <button className="btn" disabled="disabled">
              Selected
            </button>
          ) : (
            <>
              {" "}
              <button
                onClick={() => handleAddToSelectedClass(Class)}
                className="btn btn-active btn-ghost"
              >
                Select
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayClass;
