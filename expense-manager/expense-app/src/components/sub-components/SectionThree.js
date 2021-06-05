import React, { useContext } from "react";
import "./SectionStyles.css";
import { Avatar, Card, CardContent } from "@material-ui/core";
import { UserContext } from "../../StateContext";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { useHistory } from "react-router-dom";
import "./Form.css";
import Form from "./Form";
import { auth } from "../../firebase";

function SectionThree() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        // Sign-out successful.
        history.push("/login");
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        console.log(" An error happened.", error);
      });
  };
  return (
    <div className="section_three">
      <Card className="section_three_profile_card">
        <h4>Profile</h4>
        <CardContent className="prfile_content">
          <img
            className="profile_picture"
            src={user === null ? <Avatar></Avatar> : user.photoURL}
            alt=""
          />
          <div className="profile_name">
            <b>{user === null ? " " : user.displayName}</b>
            <br></br>
            {user === null ? " " : user.email}
          </div>
          <ExitToAppRoundedIcon
            className="logout_button"
            onClick={signOut}
          ></ExitToAppRoundedIcon>
        </CardContent>
      </Card>
      <br></br>
      <Card className="section_three_form_card">
        <h4 className="form_title">Add Data</h4>
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </div>
  );
}

export default SectionThree;
