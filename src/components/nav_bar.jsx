import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Grid, Avatar, Container} from "@material-ui/core";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../const.js";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = (props) => {
  const {auth, signOut} = props;
  const [user] = useAuthState(auth);


  return (
    <AppBar
      style={{
        backgroundColor: `rgb(168, 170, 61)`
      }} position="static">
      {user ?
        <Toolbar variant={`dense`}>
          <Grid container justify={`flex-start`} size={`Large`}>
            <Avatar alt="Remy Sharp" src={user.photoURL} />
            <div >{user.displayName}</div>
          </Grid>
          <Grid container justify={`flex-end`}>
            <Button onClick={() => signOut()} variant={`outlined`}>Выйти</Button>
          </Grid>
        </Toolbar>
        :
        <Container fixed>
          <Toolbar container="true" variant={`dense`}>

            <Grid container justify={`flex-start`}>
              <NavLink container="true" to={`/`} style={{background: `lightgray`, border: `none`, boxShadow: `none`}}>
                <Button size={`small`} variant={`contained`} style={{width: `144px`}}>Главное меню</Button>
              </NavLink>
            </Grid>
            <Grid container justify={`flex-end`}>
              <NavLink container="true" to={LOGIN_ROUTE} style={{background: `lightgray`, border: `none`, boxShadow: `none`}}>
                <Button variant={`contained`} size={`small`}>Логин</Button>
              </NavLink>
            </Grid>
          </Toolbar>
        </Container>
      }
    </AppBar >
  );
};
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};
export default Navbar;
