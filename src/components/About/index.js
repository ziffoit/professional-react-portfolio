import React from "react";
import personalPhoto from "../../assets/self.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={personalPhoto} className="my-2 img-thumbnail" alt="Kevin power posing in front of a window in a collared shirt"/>
        </section>
    )
}

export default About;