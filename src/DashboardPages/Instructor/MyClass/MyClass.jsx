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

// import React, { useEffect, useState } from "react";
// import useClass from "../../../hooks/useClass";
// import useAuth from "../../../hooks/useAuth";

// const MyClass = () => {
//   const { user } = useAuth();
//   const [allClass, setAllClass] = useState([]);
//   const [status, setStatus] = useState("pending");
//   // const [allClass] = useClass();

//   useEffect(() => {
//     fetchClasses();
//   }, [status]);

//   const fetchClasses = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/allClass?status=${status}`
//       );
//       const data = await res.json();
//       setAllClass(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleStatusChange = (newStatus) => {
//     setStatus(newStatus);
//   };

//   const filteredClasses = allClass.filter(
//     (classItem) => classItem?.email === user.email
//   );

//   return (
//     <div>
//       <h1>My Class</h1>
//       <div>
//         <button onClick={() => handleStatusChange("pending")}>Pending</button>
//         <button onClick={() => handleStatusChange("approved")}>Approved</button>
//         <button onClick={() => handleStatusChange("denied")}>Denied</button>
//       </div>{" "}
//       <div>
//         {" "}
//         <div className="w-11/12 mx-auto">
//           {" "}
//           <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
//             {" "}
//             <h3 className="text-3xl text-center">
//               My class: {filteredClasses.length}{" "}
//             </h3>
//           </div>
//           <div className="overflow-x-auto w-full">
//             <table className="table w-full">
//               {/* head */}
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Class Name</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredClasses.map((classItem, index) => (
//                   <tr key={classItem._id}>
//                     <td>{index + 1}</td>
//                     <td>
//                       <div className="avatar">
//                         <div className="mask mask-squircle w-12 h-12">
//                           <img
//                             src={classItem.img}
//                             alt="Avatar Tailwind CSS Component"
//                           />
//                         </div>
//                         <p>{classItem.className}</p>
//                       </div>
//                     </td>
//                     <td>${classItem.price}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyClass;
