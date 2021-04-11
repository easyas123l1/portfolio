import React from "react";
import Navbar from "../Navbar/Navbar";
import portfolio from "../../styles/portfolio.module.scss";

export default function Projects() {
    return (
        <div className={portfolio.aboutMe}>
            <Navbar />
            <div>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pvpwordsearchreact-git-master-andrewwilson90.vercel.app/"
                >
                    Word Search with PvP
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/easyas123l1/pvpwordsearchreact"
                >
                    front end code
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/easyas123l1/pvpwordsearch"
                >
                    back end code
                </a>
            </div>
        </div>
    );
}
