import React, { useEffect, useState } from "react";
import "./App.scss";
import JobBar from "../JobBoard/JobBar/JobBar.tsx";
import axios from "axios";

function App() {
  const apiUrl = "https://api.json-generator.com/";
  const apiToken = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  const [inf, setInf] = useState([]);

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
    <div className="App">
      {inf.map((i, id) => {
        return <JobBar item={i} key={id} />;
      })}
    </div>
  );
}

export default App;
