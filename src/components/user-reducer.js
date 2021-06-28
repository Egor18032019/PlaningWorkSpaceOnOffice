// import {
//   AppRoute
// } from "../../const";
// import history from "../../history";
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

// Определяем действия(actions)
const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION: `AUTHORIZATION`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  LOAD: `LOAD`,
};

firebase.initializeApp({
  apiKey: `AIzaSyBvHI0M3NUsdLqGfo3FtRobgf5L6pjTIbQ`,
  authDomain: `authorization-14053.firebaseapp.com`,
  projectId: `authorization-14053`,
  storageBucket: `authorization-14053.appspot.com`,
  messagingSenderId: `585147319776`,
  appId: `1:585147319776:web:d93dda59c89b7607eb9785`,
  measurementId: `G-EFHWL1D7DD`
});
const auth = firebase.auth();
auth.signOut();
const firestore = firebase.firestore();


// Объект начального состояния(state):
const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  auth
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: AuthorizationStatus.NO_AUTH,

      });
    case ActionType.AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: AuthorizationStatus.AUTH,

      });
    default:
      return state;
  }
};


// запрос на сервер
const Operation = {
  signOut: () => (dispatch) => {
    auth.signOut();
    dispatch(ActionCreator.setAuthStatus({}));
  },

  login: () => (dispatch) => {
    const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const {
        user
      } = await auth.signInWithPopup(provider);
      return user;
    };
    login().then((response) => {
      if (response) {
        dispatch(ActionCreator.setAuthData(response));
      } else {
        console.error(`Что то пошло не так .()`);
      }
    });

  }
};

const ActionCreator = {
  // переписать
  setAuthStatus: (status) => {
    console.log(`setAuthStatus`);
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },
  setAuthData: (data) => {
    return {
      type: ActionType.AUTHORIZATION,
      users: data
    };
  },
};

export {
  usersReducer,
  ActionType,
  Operation,
  AuthorizationStatus,
  ActionCreator
};
