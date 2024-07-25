import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfilePage from "./pages/CompleteProfilePage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import OwnerDashbord from "./pages/OwnerDashbord";
import Freelancer from "./pages/Freelancer";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Owner from "./pages/OwnerDashbord";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/owner" element={<AppLayout />}>
          <Route index element={<Navigate to="dashbord"><OwnerDashbord/></Navigate>} />
          <Route path="/ownerdashbord" element={<OwnerDashbord />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="freelancer" element={<Freelancer />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
