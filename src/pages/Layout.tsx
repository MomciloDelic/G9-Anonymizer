import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderContainer from "../components/HeaderContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeaturesPage from "./FeaturesPage";
import CardContainer from "../components/CardContainer";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <HeaderContainer />
      <FeaturesPage />
      <CardContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
