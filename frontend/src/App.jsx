import React from "react";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import course from "./components/Course";
import { Route, Routes } from "react-router-dom";
import Upsign from "./components/Upsign";
import Connect from "./connect/Connect";
function App() {
  return (
    <>
      {/* <Home />
      <Course />
       */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/upsign" element={<Upsign />} />
          <Route path='/contact' element={<Connect/>}/>
        </Routes>
      </div>
    </>
  );
}


export default App;
