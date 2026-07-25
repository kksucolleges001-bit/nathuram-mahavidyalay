import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Academics from "../pages/Academics/Academics";
import Admissions from "../pages/Admissions/Admissions";
import Administration from "../pages/Administration/Administration";
import MandatoryDisclosure from "../pages/MandatoryDisclosure/MandatoryDisclosure";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/Legal/PrivacyPolicy";
import TermsAndConditions from "../pages/Legal/TermsAndConditions";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "academics", element: <Academics /> },
      { path: "admissions", element: <Admissions /> },
      { path: "administration", element: <Administration /> },
      { path: "mandatory-disclosure", element: <MandatoryDisclosure /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default router;