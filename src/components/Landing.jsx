import React from "react";
import "../index.css";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__content">
            <div className="landing__header">
              <h1 className="landing__title">
                Welcome To My
                <span className="green"> Boulevard</span>!
              </h1>
              <p className="section__para">
                In this website I have some
                <span className="green"> "lanes"</span> of my boulevard that
                keep track of some things for me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
