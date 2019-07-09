import React from "react";
import preloader from "./images/loading-animation.gif";
import SignIn from "./SignIn";
import { ProfileContext } from "./Contexts/ProfileContext";
import Dashboard from './Dashboard'

class App extends React.Component {
  state = { signedIn: false, initialized: false, accessToken: "", profile: {} };

  componentDidMount() {
    this.initialize();
  }

  // at the start the stat of the app it will check whether user was previously logged in or not by checking
  // local storager with the key 'access-token' if it is present then user was previously logged in. in this
  // version this this is the only criteria to check the state but in future after getting token from local
  //  storage  we need to check whether token is valid or not by api call
  initialize() {
    let accessToken = localStorage.getItem("access-token");

    // after this user will fetch the profile details from the server but currently i m leaving this to figure
    // this later and now a default profile will be displayed

    if (accessToken) {
      this.setState({ signedIn: true });
    }

    this.setState({ initialized: true });
  }

  render() {
    if (this.state.initialized){ 
        if(this.state.signedIn)
          return <Dashboard />
        else
          return <SignIn />;
    }
    else
      return (
        <div
          style={{
            height: "90vh",
            width: "70vw",
            textAlign: "center",
            position: "relative"
          }}
        >
          {" "}
          <img
            alt="preloader"
            src={preloader}
            style={{ position: "absolute", top: 0, bottom: 0, margin: "auto" }}
          />{" "}
        </div>
      );
  }
}

export default App;
