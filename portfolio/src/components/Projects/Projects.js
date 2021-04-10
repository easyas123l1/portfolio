import React from "react";
import Navbar from "../Navbar/Navbar";
import portfolio from "../../styles/portfolio.module.scss";

export default function Projects() {
    return (
        <div className={portfolio.aboutMe}>
            <Navbar />
            <div>
                <p>project 1</p>
            </div>
        </div>
    );
}
