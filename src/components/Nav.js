import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = ({ location: { pathname }, user, updateCurrentUser }) => {
  let logged_in = !!user;
  console.log(logged_in)
  let logout = () => {
    //clear localStorage
    localStorage.removeItem("token")
    //update currentUser back to null
    updateCurrentUser(null)
  }
  return (
    <Menu fixed='top' inverted >
      {logged_in ? (
        <Fragment>
          <Menu.Menu position="right" as='h3' >
            <Menu.Item  to="/logout" name="Logout" onClick={logout} color={'green'}/>
          </Menu.Menu>
        </Fragment>
      ) : (
          null
      
      )}
    </Menu>
  );
};

export default withRouter(Nav);