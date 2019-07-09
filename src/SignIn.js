import React from "react";
import footerImg from "./images/below_img.jpg";
import "antd/dist/antd.css";
import { Modal } from "antd";

// need to use images instead of buttons for signin they are not rendering if there is some delay
// also need to make this as popup

function SignIn() {
  return (
    <Modal
      title={null}
      visible={true}
      closable={false}
      footer={null}
      className="signInHeading"
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

        <div id="my-signin2" style={{ marginLeft: 60, marginTop: 55 }}></div>

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
        width="450"
        style={{ borderRadius: "0px 23px 23px 23px", marginTop: 43 }}
      />
    </Modal>
  );
}

export default SignIn;
