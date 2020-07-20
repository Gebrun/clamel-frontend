import React, { useState } from "react";

const SectionC = () => {
  const [state, setState] = useState({
    registered: false,
  });

  let inputField;

  const registerEmail = () => {
    //console.log(inputField.value)

    fetch("http://localhost:8081/emails/register", {
      method: "POST",
      body: JSON.stringify({ email: inputField.value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((json) => {
        console.log("response from backend", json);
        setState({
          registered: true,
        });
      });
  };

  return (
    <div>
      <section id="section-c" className="grid">
        <div className="content-wrap">
          <h2 className="content-title">We handle all your design dreams</h2>
          <p>
            If you appreciate Interior Design as much as we do, you understand
            how important is to us the sense of harmony between space and decor.
            Our interios well facilitate lifestyle needs!
            <br />
            <br />
            <b>Say no more !!</b>
            <br />
            <br />
            Explore more on our website as well as our Facebook page listed at
            the bottom of the page and also, drop us your e-mail in the box
            below to stay updated with our future projects!
          </p>
          <div id="container">
            <form action="#">
              <input
                type="email"
                className="email-box"
                placeholder="Enter your email..."
                required=""
                ref={(comp) => (inputField = comp)}              />
              <input
                className="submit"
                type="button"
                value="Submit"
                required=""
                onClick={registerEmail}
              />
            </form>
          </div>
          {state.registered && (
            <div className="alert alert-success" role="alert">
              You have successfully subscribed!
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SectionC;
