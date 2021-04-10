import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavTabs() {
  // const location = useLocation();

  return (
    <Router>
        <Link
          to="./"
          //   className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
        Home
      </Link>
      <Link
        to="./login"
        // className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
      >
        Login
      </Link>
    </Router>
  );
}

export default NavTabs;
