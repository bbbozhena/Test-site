import React, { useState } from "react";
import "./JobBar.scss";
import moment from "moment";
import JobDetails from "../../JobDetails/JobDetail/JobDetail.tsx";
import { createBrowserRouter, Link } from "react-router-dom";

function JobBar({ item }) {
  const [showDetails, setShowDetails] = useState(null);

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

  const requestOptions = {
    method: "GET",
  };

  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${item.location.lat}&lon=${item.location.long}&apiKey=01bf973e39c34b61aef035b02da1863b`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.features[0].properties);
    })
    .catch((error) => console.log("error", error));

  // const handleClick = (e) => {
  //   setShowDetails(e);
  // };

  return (
    <>
      <ul className="flex flex-col ">
        <Link to={`/details + ${item.id}`}>
          <li
            className="flex flex-row job-bar-long  px-12 py-10"
            // onClick={() => handleClick(item)}
          >
            {/* {showDetails === item ? <JobDetails item={item} /> : null} */}
            <img className="mr-6" src={randomPhoto} width={85} />
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
              <p className="post-day">Posted {daysAgo}</p>
            </div>
          </li>
        </Link>
      </ul>
    </>
  );
}
export default JobBar;
