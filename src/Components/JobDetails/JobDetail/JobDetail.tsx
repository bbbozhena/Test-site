import React, { useEffect, useState } from "react";
import "./JobDetail.scss";
import axios from "axios";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

function JobDetails() {
  let { userId } = useParams();

  const [inf, setInf] = useState<any[]>([]);

  const apiUrl = "https://api.json-generator.com/";
  const apiToken = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  useEffect(() => {
    const instance = axios.create({
      baseURL: apiUrl,
      timeout: 1000,
      headers: { Authorization: "Bearer " + apiToken },
    });

    instance
      .get("templates/ZM1r0eic3XEy/data")
      .then((response) => {
        setInf([response.data[0]]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  inf.map((job) => {
    const daysAgo = moment(`${job.createdAt}`, "YYYYMMDD").fromNow();
    console.log(job);

    return (
      <>
        <div className="flex job">
          <div className="job-details">
            <header className="flex justify-between">
              <h1 className="">Job Details</h1>
              <div className="flex items-end">
                <img src="./icons/Rectangle 31.svg" />
                <p className="mr-10">Save to my list</p>
                <img src="./icons/Shape icon.svg" />
                <p>Share</p>
              </div>
            </header>
            <div className="line"></div>
            <div className="flex flex-col justify-items-start">
              <button className="apply-button">Apply now</button>
              <div className="job-title flex  justify-between ">
                <h3 className="text-start mt-5">{job.title}</h3>
                <div className="flex flex-col">
                  <span className="mt-5">€ {job.salary}</span>
                  <p>Brutto, per year</p>
                </div>
              </div>
              <span className="posted-ago flex mt-5 ">Posted {daysAgo}</span>
              <p className=" flex text-start font-sans font-normal text-lg leading-6 mt-5 mb-10">
                {job.description}
              </p>
              <h6 className="flex font-bold mb-5">Responsibilities</h6>
              <p className=" flex text-start font-sans font-normal text-lg leading-6">
                Wellstar Medical Group, a physician-led multi-specialty group in
                Atlanta, Georgia, is currently recruiting for a BC/BE
                cardiothoracic surgeon to join their existing cardiovascular
                program. This is an opportunity to play a key role on a
                multidisciplinary team of cardiologists and surgeons.
                <br />
                <br />
                The ideal candidate will have five or more years of experience
                in cardiac surgery. This candidate should be facile with
                off-pump revascularization, complex aortic surgery, minimally
                invasive valve and valve repair, transcatheter valve
                replacement, surgical atrial fibrillation ablation, ventricular
                assist device placement, and extra corporeal membrane
                oxygenation.
                <br />
                <br />
                Wellstar is one of the largest integrated healthcare systems in
                the Southeast with 11 hospitals in Atlanta metro region. With
                two open heart programs at Kennestone Regional Medical Center
                and Atlanta Medical Center, Wellstar cardiac surgeons perform
                over 1200 cardiac procedures per year. The cardiac service line
                is the only center in Georgia with the Joint Commission’s
                Comprehensive Cardiac Center certification.
              </p>
              <p className="font-bold text-start mt-10 mb-5">
                Compensation & Benefits:
              </p>
              <ul className="text-start list-disc list-outside">
                Our physicians enjoy a wide range of benefits, including:
                {job.benefits.map((b) => {
                  <li key={b.id} className="m-0">
                    {b}
                  </li>;
                })}
              </ul>
              <button className="apply-button">Apply now</button>
              <div className="additional-info flex flex-col mt-20">
                <h3 className=" text-start">Additional info</h3>
                <div className="line"></div>
                <p className="text-start mb-2">Employment type</p>
                <div className="flex">
                  {job.employment_type.map((e) => {
                    <div key={e.id} className="employments mr-5">
                      {e}
                    </div>;
                  })}
                </div>
                <p className="text-start mt-5 mb-2">Benefits</p>
                <div className="flex">
                  {job.benefits.map((b) => {
                    <div key={b.id} className="employments2 mr-5">
                      {b}
                    </div>;
                  })}
                </div>
              </div>
              <div className="attached">
                <h3 className="text-start mt-20">Attached images</h3>
                <div className="line"></div>
                <div className="flex mt-5">
                  {job.pictures.map((img) => {
                    <img className="mr-5" src={img}></img>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="map-block">
              <h3 className="map-name text-start mb-3">
                Department name.
                <br />
                {job.name}
              </h3>
              <div className="flex location-map">
                <img src="./icons/location.svg" />
                <div>
                  <p>AKH Wien, 1090 Wien, Währinger </p>
                  <p className="flex mb-3">Gürtel 18-20</p>
                </div>
              </div>
              <span className="flex">{job.phone},</span>
              <p className="text-start">{job.email}</p>
            </div>
          </div>
        </div>

        <button className="flex button-return">
          <Link to="/">
            <img className="mr-10" src="./icons/Arrow.svg" />
            <p>RETURN TO JOB BOARD</p>
          </Link>
        </button>
      </>
    );
  });
}

export default JobDetails;
