import React from "react";
import Navbar from "./Navbar";
import CardContainer from "./CardContainer";
import DemoContainer from "./DemoContainer";
import HeaderContainer from "./HeaderContainer";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderContainer />
      <CardContainer />
      <DemoContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
