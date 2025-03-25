import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Header from "Components/Header";
import Footer from "Components/Footer";
import OriginAlliance from "Components/OriginAlliances";

import CSR from "Pages/CSR";
import Home from "Pages/Home";
import Events from "Pages/Events";
import SiteMap from "Pages/Sitemap";
import Journey from "Pages/Journey";
import Grading from "Pages/Grading";
import Policies from "Pages/Policies";
import NotFound from "Pages/NotFound";
import WhatWeDo from "Pages/WhatWeDo";
import Contactus from "Pages/ContactUs";
import Rjcpolicy from "Pages/RJCPolicy";
import Provenance from "Pages/Provenance";
import Customization from "Pages/Customization";

// import Story from "Components/Story";

import { Toaster } from "react-hot-toast";

import "Assets/Scss/Theme.module.scss";
import Cookie from "Components/Cookie";
import { useEffect } from "react";

function App() {
  let preventOriginPagesList = ["", "/", "/home", "/provenance", "/policies"];

  function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  }

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop />
      <Cookie />
      <Header />
      <div className="App">
        <Routes>
          {[
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/events", element: <Events /> },
            { path: "/contact_us", element: <Contactus /> },
            { path: "/what-we-do", element: <WhatWeDo /> },
            { path: "/journey", element: <Journey /> },
            { path: "/our-history", element: <Journey /> },
            { path: "/customization", element: <Customization /> },
            { path: "/grading", element: <Grading /> },
            { path: "/policies", element: <Policies /> },
            { path: "/rjcpolicy", element: <Rjcpolicy /> },
            { path: "/provenance", element: <Provenance /> },
            { path: "/csr", element: <CSR /> },
            { path: "/sitemap", element: <SiteMap /> },
            // { path: "/story", element: <Story /> },
            { path: "/*", element: <NotFound /> },
          ].map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
      {!preventOriginPagesList.some(
        (path) => window.location.pathname.replace(/\/$/, "") === path
      ) && <OriginAlliance />}
      <Footer />
    </Router>
  );
}

export default App;
