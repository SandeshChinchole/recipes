import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div className="nav">
            <div className="icon">
            </div>
            <img style={{cursor: "pointer"}} src="https://s3.amazonaws.com/assets.studio71.io/img/s71_logo512.png"
            height="80%"
            alt="logo"
            />
        </div>
    );
}

export default Header;