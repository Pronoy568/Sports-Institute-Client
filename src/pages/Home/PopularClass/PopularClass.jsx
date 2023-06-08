import React, { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ClassShow from "./ClassShow";
import useClass from "../../../hooks/useClass";

const PopularClass = () => {
  const [allClass] = useClass();
  // const [popularClass, setPopularClass] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/allClass")
  //     .then((res) => res.json())
  //     .then((data) => setPopularClass(data));
  // }, []);

  return (
    <div className="w-10/12 mx-auto my-10">
      <SectionTitle heading={"Popular Class"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allClass.slice(0, 6).map((Class) => (
          <ClassShow key={Class.id} Class={Class}></ClassShow>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
