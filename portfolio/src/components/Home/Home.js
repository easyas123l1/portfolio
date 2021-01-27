import React from "react";
import { NavLink as Link } from "react-router-dom";
import portfolio from "../../styles/portfolio.module.scss";

export default function Home() {
    return (
        <div>
            <div className={portfolio.image}>
                <div className={portfolio.navbar}>
                    <Link to="/home">Home</Link>
                    <Link to="/aboutMe">About Me</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <p className={portfolio.hello}>
                    Hello World, I'm Andrew. A Full-Stack Web Developer.{" "}
                </p>
                <p className={portfolio.hello}>
                    A Lambda School Bootcamp Graduate
                </p>
            </div>
        </div>
    );
}
