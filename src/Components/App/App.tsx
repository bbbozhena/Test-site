import React, { useEffect, useState } from "react";
import "./App.scss";
import { Link, Route, Routes, useParams, useNavigate } from "react-router-dom";
import JobBar from "../JobBoard/JobBar/JobBar.tsx";
import axios from "axios";
import Pagination from "../Pagination/Pagination.tsx";
import JobDetails from "../JobDetails/JobDetail/JobDetail.tsx";
import usePagination from "../../Hooks/usePagination.tsx";

function App() {
  const [inf, setInf] = useState([]);

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
        setInf(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <div className="items"></div>
        <Pagination inf={inf} />
      </div>
      {/* {inf.map((i) => {
        return <JobDetails job={i} />;
      })} */}
      
    </>
  );
}

export default App;
