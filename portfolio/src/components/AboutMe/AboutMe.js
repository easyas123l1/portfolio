import React from "react";
import Navbar from "../Navbar/Navbar";
import portfolio from "../../styles/portfolio.module.scss";

export default function AboutMe() {
    return (
        <div className={portfolio.aboutMe}>
            <div className={portfolio.aboutimage}>
                <Navbar />
                <div className={portfolio.aboutpage}></div>
            </div>
        </div>
    );
}
