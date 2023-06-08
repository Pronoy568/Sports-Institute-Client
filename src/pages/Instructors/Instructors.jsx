import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import DisplayInstructors from "./DisplayInstructors";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allInstructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto my-10">
      <SectionTitle heading={"Instructors"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <DisplayInstructors
            key={instructor.id}
            instructor={instructor}
          ></DisplayInstructors>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
