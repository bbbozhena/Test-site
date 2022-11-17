import React from "react";
import "./JobBar.scss";

function JobBar({ item }) {
  const photos = [
    "Hospital image in circle.svg",
    "Hospital image in circle2.svg",
    "Hospital image in circle3.svg",
    "Hospital image in circle4.svg",
    "Hospital image in circle5.svg",
    "Hospital image in circle6.svg",
  ];
  return (
    <>
      <ul className="flex flex-col ">
        <li className="flex flex-row job-bar-long  px-12 py-10">
          <img className="mr-6" src="Hospital image in circle.svg" width={85} />
          <div className="text-left">
            <h1>{item.title}</h1>
            <p className="description">Department name • {item.name}</p>
            <div className="flex">
              <img className="mr-2" src="./icons/Combined Shape.svg" />
              <p className="location"></p>
            </div>
          </div>
          <img className="px-10" src="./icons/Rating.svg"></img>
          <div className="flex flex-col ">
            <img
              className="ml-24"
              src="./icons/Rectangle 31.svg"
              width={16}
              height={20}
            />
            <p className="post-day">Posted 2 days ago</p>
          </div>
        </li>
      </ul>
    </>
  );
}
export default JobBar;
