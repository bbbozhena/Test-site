import React from "react";
import "./JobDetail.scss";

function JobDetails() {
  return (
    <>
      <div className="job">
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
            <h3 className="text-start">
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
          <span className="posted-ago flex mt-5 ">Posted 2 days ago</span>
          <p className="w-1/2 flex text-start font-sans font-normal text-lg leading-6 mt-5 mb-10">
            At WellStar, we all share common goals. That’s what makes us so
            successful – and such an integral part of our communities. We want
            the same things, for our organization, for our patients, and for our
            colleagues. As the most integrated healthcare provider in Georgia,
            this means we pride ourselves on investing in the communities that
            we serve. We continue to provide innovative care models, focused on
            improving quality and access to healthcare.
          </p>
          <h6 className="flex font-bold mb-5">Responsibilities</h6>
          <p className="w-1/2 flex text-start font-sans font-normal text-lg leading-6">
            Wellstar Medical Group, a physician-led multi-specialty group in
            Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
            surgeon to join their existing cardiovascular program. This is an
            opportunity to play a key role on a multidisciplinary team of
            cardiologists and surgeons.
            <br />
            <br />
            The ideal candidate will have five or more years of experience in
            cardiac surgery. This candidate should be facile with off-pump
            revascularization, complex aortic surgery, minimally invasive valve
            and valve repair, transcatheter valve replacement, surgical atrial
            fibrillation ablation, ventricular assist device placement, and
            extra corporeal membrane oxygenation.
            <br />
            <br />
            Wellstar is one of the largest integrated healthcare systems in the
            Southeast with 11 hospitals in Atlanta metro region. With two open
            heart programs at Kennestone Regional Medical Center and Atlanta
            Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac
            procedures per year. The cardiac service line is the only center in
            Georgia with the Joint Commission’s Comprehensive Cardiac Center
            certification.
          </p>
          <p className="font-bold text-start mt-10 mb-5">
            Compensation & Benefits:
          </p>
          <ul className="text-start list-disc list-outside mb-5">
            Our physicians enjoy a wide range of benefits, including:
            <li className="m-0">
              Very competitive compensation package with bonuses
            </li>
            <li className="m-0"> Medical, Dental, and Vision Insurance</li>
            <li className="m-0">Occurrence-based Malpractice Coverage</li>
            <li className="m-0">
              Short-term and Long-term Disability Insurance and life insurance
            </li>
          </ul>
          <button className="apply-button">Apply now</button>
          <div className="additional-info flex flex-col mt-20">
            <h3 className=" text-start">Additional info</h3>
            <div className="line"></div>
            <p className="text-start mb-2">Employment type</p>
            <div className="flex">
              <div className="employments mr-2">Full time</div>
              <div className="employments mr-2">Part time</div>
              <div className="employments">Temporary</div>
            </div>
            <p className="text-start mt-5 mb-2">Benefits</p>
            <div className="flex">
              <div className="employments2 mr-2">Full time</div>
              <div className="employments2 mr-2">Full time</div>
            </div>
          </div>
          <div className="attached">
            <h3 className="text-start mt-20">Attached images</h3>
            <div className="line"></div>
            <div className="flex mt-5">
              <img className="mr-4" src="team.svg" />
              <img className="mr-4" src="headers.svg" />
              <img src="build.svg" />
            </div>
          </div>
        </div>
      </div>
      <button className="flex button-return">
        <img className="mr-10" src="./icons/Arrow.svg" />
        <p>RETURN TO JOB BOARD</p>
      </button>

      <div>
        <div className="map-bllock"></div>
        <map></map>
      </div>
    </>
  );
}
export default JobDetails;
