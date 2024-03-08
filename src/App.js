import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import LiveNews from "./components/LiveNews/LiveNews";

const App = () => {
  const pageSize = 9;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar  category={"Category"}/>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
        <Route path="/About" element={<About/>}></Route>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="General"
                pageSize={pageSize}
                country={"in"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                key="Business"
                pageSize={pageSize}
                country={"in"}
                category={"Business"}
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                key="Entertainment"
                pageSize={pageSize}
                country={"in"}
                category={"Entertainment"}
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                setProgress={setProgress}
                key="General"
                pageSize={pageSize}
                country={"in"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                key="Health"
                pageSize={pageSize}
                country={"in"}
                category={"Health"}
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                key="Science"
                pageSize={pageSize}
                country={"in"}
                category={"Science"}
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                key="Sports"
                pageSize={pageSize}
                country={"in"}
                category={"Sports"}
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                key="Technology"
                pageSize={pageSize}
                country={"in"}
                category={"Technology"}
              />
            }
          />
          <Route
            exact
            path="/liveNews"
            element={
              <LiveNews/>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};
export default App;
