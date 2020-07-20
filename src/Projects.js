import React from "react";
import { Redirect, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Projects = () => {
  return (
      <div>
        <Nav/>
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
          When taking on a new project, we at Clamel Design know how important it is to have the job completed on time and on budget. We also proud ourselves with keeping a neat and clean work site. 
          </p>

        </div>
      </header>







    <div className="imageGrid">
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1536858974309-969976df0d4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Pont de Bir-Hakeim, Paris</h2>
          <div className="content">
            The western part of the Pont de Bir-Hakeim seen at night. Buildings
            of the 16th arrondissement of Paris are visible in the background.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'}/>
        <div className="textWrapper">
          <h2>Wiesen Viaduct, Switzerland</h2>
          <div className="content">
            A RhB Ge 4/4 II with a push–pull train crosses the Wiesen Viaduct
            between Wiesen and Filisur, Switzerland.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1590474505283-69872e196b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Wiesen Viaduct, Switzerland</h2>
          <div className="content">
            A RhB Ge 4/4 II with a push–pull train crosses the Wiesen Viaduct
            between Wiesen and Filisur, Switzerland.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Wiesen Viaduct, Switzerland</h2>
          <div className="content">
            A RhB Ge 4/4 II with a push–pull train crosses the Wiesen Viaduct
            between Wiesen and Filisur, Switzerland.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Wiesen Viaduct, Switzerland</h2>
          <div className="content">
            A RhB Ge 4/4 II with a push–pull train crosses the Wiesen Viaduct
            between Wiesen and Filisur, Switzerland.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Office building, Germany</h2>
          <div className="content">
            Office building of the LVM Insurance in Munster (Westphalia),
            Germany.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Maya Beach, Thailand</h2>
          <div className="content">
            Long-tail boats in Maya Beach, Ko Phi Phi Lee, Thailand.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Chi Minh City, Vietnam.</h2>
          <div className="content">
            Night view of Ho Chi Minh City from Bitexco Financial Tower,
            Vietnam.
          </div>
        </div>
      </div>
      <div
        className="tile">
        <img src={'https://images.unsplash.com/photo-1570737209810-87a8e7245f88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}/>
        <div className="textWrapper">
          <h2>Porto City Hall, Portugal</h2>
          <div className="content"></div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    </div>
  );
};

export default Projects;
