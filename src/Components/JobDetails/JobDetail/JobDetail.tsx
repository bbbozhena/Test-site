import React from "react";
import "./JobDetail.scss";

function JobDetails() {
  return (
    <>
      <div>
        <header className="flex justify-between">
          <h1 className="">Job Details</h1>
          <div className="flex items-end">
            <img src="./icons/Rectangle 31.svg" />
            <p className="mr-10">Save to my list</p>
            <img src="./icons/Shape icon.svg" />
            <p>Share</p>
          </div>
        </header>
        <div className="flex flex-col ">
          <button className="apply-button">Apply now</button>
          <div className="job-title flex justify-between ">
            <h3>
              Arbeitsmediziner/-in / Betriebsmediziner/-in
              <br /> (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für
              <br /> die Weiterbildung zum Facharzt/
              <br />
              zur Fachärztin für Arbeitsmedizin (m/w/d)
            </h3>
            <div className="flex flex-col">
              <span>€ 54 000—60 000</span>
              <p>Brutto, per year</p>
            </div>
          </div>
          <span className="posted-ago ">Posted 2 days ago</span>
          <p></p>
          <h6></h6>
          <p></p>
          <ul>
            <li></li>
          </ul>
          <button></button>
          <div>
            <h3></h3>
            <p></p>
            <div>
              <div>Full time</div>
              <div>Full time</div>
              <div>Full time</div>
            </div>
            <p></p>
            <div>
              <div>Full time</div>
              <div>Full time</div>
            </div>
          </div>
          <div>
            <h3></h3>
            <img src="" />
            <img src="" />
            <img src="" />
          </div>
        </div>
        <button></button>
      </div>
      <div>
        <div className="map-bllock"></div>
        <map></map>
      </div>
    </>
  );
}
export default JobDetails;
