import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DataSort from "./pages/DataSort";
import FilterMainSort from "../src/components/FilterPlaces/FilterMainSort";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/AboutPage" element={<AboutPage />} />
          <Route exact path="/DataSort" element={<DataSort />} />
          <Route exact path="/FilterMainSort" element={<FilterMainSort />} />
        </Routes>
        {/* Your app here */}
      </Router>
    </MantineProvider>
  );
};

export default App;
