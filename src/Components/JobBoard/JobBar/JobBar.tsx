import React from "react";
import "./JobBar.scss";
import moment from "moment";
import { Link } from "react-router-dom";

function JobBar({ item }) {
  const photos = [
    "Hospital image in circle.svg",
    "Hospital image in circle2.svg",
    "Hospital image in circle3.svg",
    "Hospital image in circle4.svg",
    "Hospital image in circle5.svg",
    "Hospital image in circle6.svg",
  ];
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

  const daysAgo = moment(`${item.createdAt}`, "YYYYMMDD").fromNow();

  
  return (
    <>
      <ul className="flex flex-col ">
        <li key={item.id} className="flex job-bar-long  px-12 py-10">
          <img className="mr-6" src={randomPhoto} width={85} />
          <div className="text-left ">
            <Link to={`/${item.id}`}>
              <h1 className="title">{item.title}</h1>
            </Link>
            <p className="description">Department name • {item.name}</p>
            <div className="flex">
              <img className="mr-2" src="./icons/Combined Shape.svg" />
              <p className="location"></p>
            </div>
          </div>
          <img className="px-10 stars" src="./icons/Rating.svg"></img>
          <div className="flex flex-col ">
            <img
              className="ml-24 save"
              src="./icons/Rectangle 31.svg"
              width={16}
              height={20}
            />
            <p className="post-day">Posted {daysAgo}</p>
          </div>
        </li>
      </ul>
    </>
  );
}
export default JobBar;
