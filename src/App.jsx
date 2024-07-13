import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container xl:max-w-screen-xl">
        <Toaster/>
        <Routes>
          <Route path="" element={<Auth />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
