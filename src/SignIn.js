import React from "react";
import footerImg from "./images/below_img.jpg";

// need to use images instead of buttons for signin they are not rendering if there is some delay 
// also need to make this as popup

function SignIn() {
  return (
    <div
      className="signInDiv"
      style={{
        backgroundColor: "white",
        height: 350,
        width: 400,
        margin: "auto",
        marginTop: "20vh",
        zIndex: 3,
        borderRadius: 23
      }}
    >
      <div
        style={{ textAlign: "center", marginTop: 30, height: 200, zIndex: 4 }}
      >
        <span
          className="signInHeading"
          style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 40 }}
        >
          {" "}
          Sign In to Game-It{" "}
        </span>

        <div
          id="twitter-button"
          className="btn btn-block btn-social btn-twitter"
          style={{
            height: 28,
            width: 307,
            fontSize: 16,
            textAlign: "center",
            marginLeft: 25,
            marginTop: 23,
            paddingTop: 8
          }}
        >
          <i className="fa fa-twitter"></i> Sign in with Twitter
        </div>

        <div id="my-signin2" style={{ marginLeft: 25, marginTop: 15 }}></div>

        <div
          class="fb-login-button"
          data-width="350"
          data-size="large"
          data-button-type="continue_with"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          style={{ marginTop: 15 }}
        ></div>
      </div>
      <img
        src={footerImg}
        alt="footer"
        height="140"
        width="400"
        style={{ borderRadius: "0px 23px 23px 23px", marginTop: 43 }}
      />
    </div>
  );
}

export default SignIn;
