import React from "react";

const DisplayClass = ({ Class }) => {
  const {
    className,
    instructorName,
    img,
    availableSeats,
    numberStudent,
    price,
  } = Class;
  return (
    <div className="my-4">
      <div className="rounded-xl p-4 w-96 bg-base-200 hover:bg-white shadow-2xl">
        <figure>
          <img className="rounded-xl w-full h-72" src={img} alt="Shoes" />
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
          <button className="btn btn-active btn-ghost">Select</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayClass;
