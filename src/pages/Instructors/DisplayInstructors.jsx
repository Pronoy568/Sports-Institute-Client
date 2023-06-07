import React from "react";

const DisplayInstructors = ({ instructor }) => {
  const { instructorName, instructorEmail, img, classNumber, className } =
    instructor;
  return (
    <div className="my-4">
      <div className="rounded-xl p-4 w-96 bg-base-200 hover:bg-white shadow-2xl">
        <figure>
          <img className="rounded-xl w-full h-72" src={img} alt="Shoes" />
        </figure>
        <div className="p-4 text-center">
          <h2 className="text-2xl mb-1 font-semibold">{instructorName}</h2>
          <p className="text-xl">
            <span className="font-semibold"></span> {instructorEmail}
          </p>
          <p className="text-xl">
            <span className="font-semibold my-2">Class:</span> {className}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Total Class:</span> {classNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayInstructors;
