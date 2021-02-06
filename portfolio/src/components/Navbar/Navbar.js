import React from "react";
import { NavLink as Link } from "react-router-dom";
import portfolio from "../../styles/portfolio.module.scss";

export default function Navbar() {
    return (
        <div className={portfolio.navbar}>
            <Link
                to="/home"
                isActive={(match, location) => {
                    if (!match) {
                        if (location.pathname === "/") {
                            return true;
                        }
                        return false;
                    }
                    return true;
                }}
            >
                Home
            </Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
}
