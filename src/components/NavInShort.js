import React from "react";
import "./NavInShorts.css";
import HamburgerDrawer from "./HamburgerDrawer"

const NavInShorts = ({setType}) => {
    return(
        <div className="nav">
            <div className="icon">
                <HamburgerDrawer setType={setType} />
            </div>
            <img style={{cursor: "pointer"}} src="https://s3.amazonaws.com/assets.studio71.io/img/s71_logo512.png"
            height="80%"
            alt="logo"
            />
        </div>
    );
}

export default NavInShorts;