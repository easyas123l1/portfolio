import React from "react";
import Navbar from "../Navbar/Navbar";
import portfolio from "../../styles/portfolio.module.scss";

export default function Home() {
    return (
        <div>
            <div className={portfolio.homeimage}>
                <Navbar />
                <p className={portfolio.hello}>
                    Hello World, I'm Andrew. A Full-Stack Web Developer.{" "}
                </p>
                <p className={portfolio.hello}>
                    Lambda School Bootcamp Graduate.
                </p>
            </div>
        </div>
    );
}
