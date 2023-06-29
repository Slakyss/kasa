import React from "react";
import Banner from "./components/Banner.jsx";
import "./components/App.css";
import AppartGrid from "./components/AppartGrid.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div>
      <Main>
        <Banner />
        <AppartGrid />
      </Main>
    </div>
  );
}

export default App;
