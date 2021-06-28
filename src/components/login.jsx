import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

import {Operation} from "./user-reducer.js";
import {getAuth} from "./selectors.js";
import {useAuthState} from "react-firebase-hooks/auth";


const Login = (props) => {
  const {loginAuth, auth} = props;
  const [user] = useAuthState(auth);
  if (user) {
    return (
      <Container>
        <Grid container
          style={{height: window.innerHeight - 50}}
          alignItems={`center`}
          justify={`center`}
        >
          <Grid style={{width: 400, background: `lightgray`}}
            container
            alignItems={`center`}
            direction={`column`}
          >
            <Box p={5}>
              Сделать:
              <ul>
                <li>Перейти с Google-table на БД(Firebae) </li>
                <li>Перенести все final-const в один файл</li>
                <li>Провести рефакторинг</li>
              </ul>

            </Box>
            <Box p={5}>
              <NavLink to={`/`} style={{background: `lightgray`, border: `none`, boxShadow: `none`}}>
                <Button variant={`outlined`} >Перейти на главную</Button>
              </NavLink>            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
  return (
    <Container>
      <Grid container
        style={{height: window.innerHeight - 50}}
        alignItems={`center`}
        justify={`center`}
      >
        <Grid style={{width: 400, background: `lightgray`}}
          container
          alignItems={`center`}
          direction={`column`}
        >
          <Box p={5}>
            <Button onClick={loginAuth} variant={`outlined`}>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatchToTitle = (dispatch) => ({
  loginAuth() {
    dispatch(Operation.login());
  },
});
const mapStateToProps = (store) => {
  return {
    auth: getAuth(store),
  };
};
Login.propTypes = {
  loginAuth: PropTypes.func.isRequired,
  auth: PropTypes.object,
};

export {Login};
export default connect(mapStateToProps, mapDispatchToTitle)(Login); // первым значения а вторым функции
