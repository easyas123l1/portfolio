import React from "react";
import Navbar from "../Navbar/Navbar";
import portfolio from "../../styles/portfolio.module.scss";

export default function AboutMe() {
    return (
        <div className={portfolio.aboutMe}>
            <Navbar />
        </div>
    );
}
