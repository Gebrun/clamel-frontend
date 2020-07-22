import React from "react";
import { Redirect, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div>
      <Nav />
      <div>
        <header id="project-design" className="grid">
          <div className="bg-image3"></div>
          <div className="content-wrap">
            <h1>
              Check out our{" "}
              <span className="clamel-red">
                <b>Design</b>
              </span>{" "}
              Projects
            </h1>
            <p>
              When taking on a new project, we at Clamel Design know how
              important it is to have the job completed on time and on budget.
              We also proud ourselves with keeping a neat and clean work site.
            </p>
          </div>
        </header>
        <div className="imageGrid">
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1536858974309-969976df0d4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>Rixos, The Palm Dubai.</h2>
              <div className="content">
                Happiness is a small house, with a big kitchen.
              </div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
              }
            />
            <div className="textWrapper">
              <h2>Jumeirah Zabeel Saray, Dubai.</h2>
              <div className="content">
                In the childhood memories of every good cook, there's a large
                kitchen, a warm stove, a simmering pot and a mom.
              </div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1590474505283-69872e196b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>The Retreat, Palm Dubai.</h2>
              <div className="content">
                The fondest memories are made when gathered around the table.
              </div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>The Ritz-Carlton, Abu Dhabi.</h2>
              <div className="content">
                Which jumpsuit should I wear for my living room today?
              </div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>The St. Regis Resort, Saadiyat Island Resort, Abu Dhabi.</h2>
              <div className="content">
                And so together, they built a life they loved.
              </div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>Jumeirah At Etihad Towers, Abu Dhabi.</h2>
              <div className="content">
                Jaw-dropping welcome thanks to sparkling Swarovski chandeliers.
              </div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>The Omni King Edward Hotel, Toronto.</h2>
              <div className="content">
                Bedrooms are like crime scenes. So many clues to be uncovered.
              </div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>Four Seasons Hotel, Toronto.</h2>
              <div className="content">Be happy, it drives people crazy.</div>
            </div>
          </div>
          <div className="tile">
            <img
              src={
                "https://images.unsplash.com/photo-1570737209810-87a8e7245f88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              }
            />
            <div className="textWrapper">
              <h2>The Adelaide Hotel, Toronto.</h2>
              <div className="content">
                It doesn't matter what you do in the bedroom as long as you
                don't do it in the street and frighten the horses.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
