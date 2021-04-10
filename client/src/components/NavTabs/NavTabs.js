import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavTabs() {
  // const location = useLocation();

  return (
    <div>
        <Link
          to="/"
          //   className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
        Home
      </Link>
      <Link
        to="/login"
        // className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
      >
        Login
      </Link>
    </div>
  );
}

export default NavTabs;
