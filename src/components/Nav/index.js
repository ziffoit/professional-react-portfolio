import React from "react";

function Nav() {
    return (
        <header className="flex-row">
            <h2>
                <a href="/">Kevin Hanson</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li classname="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    <li classname="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li classname="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                    <li classname="mx-2">
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
