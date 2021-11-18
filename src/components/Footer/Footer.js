import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <span className="name">
            Copyright Studio71 2021. Privacy Policy | Terms And Conditions | A Red Arrow Studios Company
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
            <a href="https://www.instagram.com/studio71us/?hl=en" target="__blank">
                <i className="fab fa-instagram-square fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/company/studio71lp" target="__blank">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.studio71.com/us/" target="__blank">
                <i className="fas fa-link fa-2x"></i>
            </a>
            </div>
        </div>
    )
};

export default Footer;