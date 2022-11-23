import React, { useEffect, useState } from "react";
import "./App.scss";
import JobBar from "../JobBoard/JobBar/JobBar.tsx";
import axios from "axios";
import usePagination from "../../Hooks/usePagination.tsx";
import JobDetails from "../JobDetails/JobDetail/JobDetail.tsx";

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

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: inf.length,
  });

  return (
    <div className="App">
      <div className="items">
        {inf.slice(firstContentIndex, lastContentIndex).map((el: any) => {
          return <JobBar item={el} key={el.id} />;
        })}
      </div>
      <div className="pagination">
        <p className="text">
          {page}/{totalPages}
        </p>
        <div className="pag-block">
          <button onClick={prevPage} className="page">
            &larr;
          </button>
          {[...Array(totalPages).keys()].map((el) => (
            <button
              onClick={() => setPage(el + 1)}
              key={el}
              className={`page ${page === el + 1 ? "active" : ""} number`}
            >
              {el + 1}
            </button>
          ))}
          <button onClick={nextPage} className="page">
            &rarr;
          </button>
        </div>
      </div>
      <JobDetails />
    </div>
  );
}

export default App;
