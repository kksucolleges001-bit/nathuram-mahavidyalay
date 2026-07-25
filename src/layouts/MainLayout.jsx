import React from "react";
import { Outlet } from "react-router-dom";
import TopContactBar from "../components/Layout/TopContactBar";
import AnnouncementBar from "../components/Layout/AnnouncementBar";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import ScrollToTop from "../components/Layout/ScrollToTop";
import LoadingScreen from "../components/Layout/LoadingScreen";
import PageTransition from "../components/Layout/PageTransition";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-800 dark:text-gray-200">
      <LoadingScreen />
      <TopContactBar />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
export default MainLayout;