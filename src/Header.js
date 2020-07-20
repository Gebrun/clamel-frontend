import React from "react";

const Header = () => {
  return (
    <div>
      <header id="design" className="grid">
        <div className="bg-image"></div>
        <div className="content-wrap">
          <h1>
            Welcome to{" "}
            <span className="clamel-red">
              <b>CLAMEL</b>
            </span>{" "}
            Design Division
          </h1>
          <p>
            We believe in living making good and the greatest joy of it. Crafted
            better, shaping your need because you matter! Meet natural art,
            designs that make your eyes sparkle and your heart skip a beat!
          </p>
          <a
            href="https://clamelconstruction.com/projects/"
            className="btn"
            target="_blank"
          >
            Explore Beyond Upholstery
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
