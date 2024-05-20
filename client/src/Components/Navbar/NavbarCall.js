import React from "react";
import LandingNavbar from "./LandingNavbar";
import UserNavbar from "./UserNavbar";

function NavbarCall({ auth }) {
  if (auth == 0) {
    return <LandingNavbar />;
  } else if (auth == 1) {
    return <UserNavbar />;
  }
}

export default NavbarCall;
