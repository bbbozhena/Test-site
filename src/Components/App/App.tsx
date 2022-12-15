import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetail/JobDetail.tsx";
import Home from "../Home/Home.tsx";

function App() {
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
        setInf(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(inf);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:userId" element={<JobDetails inf={inf} />} />
    </Routes>
  );
}

export default App;
