import React from "react";
import CardContainer from "../components/CardContainer";
import HeaderContainer from "../components/HeaderContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OmOss from "../pages/OmOss";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
