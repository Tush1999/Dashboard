import React from "react";
import AuthElems from "../auth-elems";

const Header = () => {
  return (
    <div className="header ">
      <div className="container flex justify-between align-center">
        <img src="https://marquee-equity.com/wp-content/themes/marquee-theme/img/m-logo.svg" />
        <div className="flex align-center">
            <AuthElems />
          <div className="header-user">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
