import React from "react";

const SectionB = () => {
  return (
    <div>
      <section id="section-b" className="grid">
        <ul>
          <li>
            <div className="card">
              <img src="./Kitchen.jpg" alt="Kitchen" />
              <div className="card-content">
                <h3 className="card-title">Kitchen</h3>
                <p>
                  “The kitchen is where you put all the ingredients together. No
                  matter what you do in life, you have to have a plan and put it
                  together.” <br />
                  <br />- Yo Gotti -
                </p>
              </div>
              <a href="#">
                <button className="card-btn1">More ideas</button>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <img src="./Bedroom.jpg" alt="Kitchen" />
              <div className="card-content">
                <h3 className="card-title">Bedroom</h3>
                <p>
                  "There are two things that make a room timeless: a sense of
                  history and a piece of the future" <br />
                  <br />- Charlotte Moss -
                </p>
              </div>
              <a href="#">
                <button className="card-btn2">More ideas</button>
              </a>
            </div>
          </li>
          <li>
            <div className="card">
              <img src="./LivingRoom.jpg" alt="Kitchen" />
              <div className="card-content">
                <h3 className="card-title">Living Room</h3>
                <p>
                  “All architecture is shelter, all great architecture is the
                  design of space that contains, cuddles, exalts, or stimulates
                  the persons in that space.” <br />
                  <br />- Philip Johnson -
                </p>
              </div>
              <a href="#">
                <button className="card-btn3">More ideas</button>
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SectionB;
