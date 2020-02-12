import React from "react";
import HeaderContainer from "../components/HeaderContainer";
import FeaturesPage from "./FeaturesPage";
import CardContainer from "../components/CardContainer";

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <FeaturesPage />
      <CardContainer />
    </React.Fragment>
  );
};

export default Layout;
