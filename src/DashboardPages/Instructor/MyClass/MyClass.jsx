import React from "react";
import useClass from "../../../hooks/useClass";
import useAuth from "../../../hooks/useAuth";

const MyClass = () => {
  const { user } = useAuth();
  const [allClass] = useClass();

  // Filter the allClass array based on email
  const filteredClasses = allClass.filter(
    (classItem) => classItem?.email === user.email
  );

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl text-center">
            My class: {filteredClasses.length}
          </h3>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.map((classItem, index) => (
                <tr key={classItem._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classItem.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                      <p>{classItem.className}</p>
                    </div>
                  </td>
                  <td>${classItem.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
