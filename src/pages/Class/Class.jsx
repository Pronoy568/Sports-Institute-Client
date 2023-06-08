import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import DisplayClass from "./DisplayClass";
import useClass from "../../hooks/useClass";

const Class = () => {
  const [allClass] = useClass();
  // const [allClass, setAllClass] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/allClass")
  //     .then((res) => res.json())
  //     .then((data) => setAllClass(data));
  // }, []);

  return (
    <div className="w-10/12 mx-auto my-10">
      <SectionTitle heading={"All Class"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allClass.map((Class) => (
          <DisplayClass key={Class.id} Class={Class}></DisplayClass>
        ))}
      </div>
    </div>
  );
};

export default Class;
