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
                        href="https://pvpwordsearchreact.vercel.app/"
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
                    <h1>Front End Technologies</h1>
                    <p>
                        React -- JavaScript -- Socket.io -- Axios -- SCSS --
                        Jest
                    </p>
                    <h1>Back End Technologies</h1>
                    <p>Express -- Knex -- PostgreSQL -- Socket.io -- Jest</p>
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
                    <h1>Front End Technologies</h1>
                    <p>React -- Redux -- SCSS -- Mocha -- Simple Bar</p>
                    <h1>Back End Technologies</h1>
                    <p>
                        Node -- Express -- Knex -- imap-simple -- mailparser --
                        nodemailer -- chai
                    </p>
                </div>
                <div className={portfolio.project}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://game-of-life-fe.vercel.app/"
                        className={portfolio.gameofLife}
                    >
                        Conway's Game of Life
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
                    <h1>Front End Technologies</h1>
                    <p>Angular -- TypeScript -- jasmine</p>
                </div>
            </div>
        </div>
    );
}
