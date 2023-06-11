import React from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const handleAddClass = (event) => {
    event.preventDefault();

    const form = event.target;

    const className = form.name.value;
    const img = form.image.value;
    const availableSeats = parseInt(form.availableSeats.value);
    const price = parseInt(form.price.value);
    const numberStudent = parseInt(form.numberStudent.value);
    const instructorName = user.displayName;

    const newClass = {
      className,
      instructorName,
      img,
      availableSeats,
      numberStudent,
      price,
      email: user?.email,
    };

    // send data to the server
    fetch("http://localhost:5000/allClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Successfully Done",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#f9f7f77f] p-24 text-center">
      <h1 className="text-4xl font-bold">Add Class</h1>
      <form onSubmit={handleAddClass}>
        {/* Form class name and image */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Class Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Class Image"
                name="image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Form Instructor name and email */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                value={user.displayName}
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                value={user.email}
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>
        {/* Form Available seat and price */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available Seats"
                name="availableSeats"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Total Student</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Total Student"
                name="numberStudent"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
