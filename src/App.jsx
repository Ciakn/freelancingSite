import React from "react";
import { Route,Routes } from "react-router-dom";
import Auth from "./components/Auth";

const App = () => {
  return <div className="">
    <Routes>
      <Route path="" element={<Auth/> } />
    </Routes>
      
  </div>;
};

export default App;
