import React from "react";
import useClass from "../../../hooks/useClass";
import SectionTitle from "../../../components/SectionTitle";

const ManageClass = () => {
  const [allClass] = useClass();
  return (
    <div className="w-10/12 mx-auto my-10">
      <SectionTitle heading={"Manage Class"}></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Available Seats</th>
            </tr>
          </thead>
          <tbody>
            {allClass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                    <p>{item.className}</p>
                  </div>
                </td>
                <td>{item.instructorName}</td>
                <td>{item?.email}</td>
                <td>${item.price}</td>
                <td>{item.availableSeats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
