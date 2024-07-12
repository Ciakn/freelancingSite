import React from "react";
import { Route,Routes } from "react-router-dom";
import Auth from "./pages/Auth";
const App = () => {
  return <div className="container xl:max-w-screen-xl">
    <Routes>
      <Route path="" element={<Auth/> } />
    </Routes>
      
  </div>;
};

export default App;
