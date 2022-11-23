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
          <ul className="text-start list-disc list-outside">
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
          <div className="float-left">
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
