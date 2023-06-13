import React from "react";
import SectionTitle from "../../components/SectionTitle";
import DisplayClass from "./DisplayClass";
import useClass from "../../hooks/useClass";

const Class = () => {
  const [allClass] = useClass();

  return (
    <div className="w-10/12 mx-auto my-10">
      <SectionTitle heading={"All Class"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allClass.map((Class) => (
          <DisplayClass key={Class._id} Class={Class}></DisplayClass>
        ))}
      </div>
    </div>
  );
};

export default Class;
