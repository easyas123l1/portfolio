import React from "react";
import Navbar from "../Navbar/Navbar";
import portfolio from "../../styles/portfolio.module.scss";

export default function Projects() {
    return (
        <div className={portfolio.aboutMe}>
            <Navbar />
            <div className={portfolio.projectsDiv}>
                <div className={portfolio.project}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://pvpwordsearchreact-git-master-andrewwilson90.vercel.app/"
                        className={portfolio.wordSearch}
                    >
                        Word Search with PvP
                    </a>
                    <div className={portfolio.githubLinks}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/easyas123l1/pvpwordsearchreact"
                        >
                            View Front Code
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/easyas123l1/pvpwordsearch"
                        >
                            View Back Code
                        </a>
                    </div>
                </div>
                <div className={portfolio.project}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tagger-lab.netlify.app/#"
                        className={portfolio.tagger}
                    >
                        Tagger
                    </a>
                    <div className={portfolio.githubLinks}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Lambda-School-Labs/tagger-fe/tree/EnzymeTessting"
                        >
                            View Front Code
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Lambda-School-Labs/tagger-be/tree/Mocha-Test"
                        >
                            View Back Code
                        </a>
                    </div>
                </div>
                <div className={portfolio.project}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://game-of-life-fe.vercel.app/"
                        className={portfolio.gameofLife}
                    >
                        Conways Game of Life
                    </a>
                    <div className={portfolio.githubLinks}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/easyas123l1/Game-Of-Life-FE"
                        >
                            View Code
                        </a>
                    </div>
                </div>
                <div className={portfolio.project}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://pvpwordsearchreact-git-master-andrewwilson90.vercel.app/"
                        className={portfolio.wordSearch}
                    >
                        Word Search with PvP
                    </a>
                    <div className={portfolio.githubLinks}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/easyas123l1/pvpwordsearchreact"
                        >
                            View Front Code
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/easyas123l1/pvpwordsearch"
                        >
                            View Back Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
