import React from "react";
import "./App.scss";
import JobBar from "../JobBoard/JobBar/JobBar.tsx";
import GotServices from "../Services/GotServices";

function App() {
  return (
    <div className="App">
      <JobBar />
      <GotServices />
    </div>
  );
}

export default App;
