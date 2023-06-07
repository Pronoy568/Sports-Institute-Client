import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorShow from "./InstructorShow";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => setPopularInstructors(data));
  }, []);

  return (
    <div className="w-10/12 mx-auto my-10">
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularInstructors.slice(0, 6).map((instructor) => (
          <InstructorShow
            key={instructor.id}
            instructor={instructor}
          ></InstructorShow>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
