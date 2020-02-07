import React from "react";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";

const NavLink = ({ toSection, text, handleDrawerClose }: any) => {
  return (
    <Button>
      <Link
        activeClass='active'
        style={{ display: "block", width: "100%" }}
        to={toSection}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={handleDrawerClose}
      >
        {text}
      </Link>
    </Button>
  );
};

export default NavLink;
