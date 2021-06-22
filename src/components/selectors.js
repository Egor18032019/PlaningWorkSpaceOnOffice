// import {createSelector} from "reselect";
import NameSpace from "../components/name-space.js";

const getActiveOffice = (state) => {
  return state[NameSpace.DATA].office;
};
const getActivePage = (state) => {
  return state[NameSpace.DATA].page;
};

const getPlaces = (state) => {
  return state[NameSpace.DATA].places;
};

const getPopup = (state) => {
  return state[NameSpace.DATA].popup;
};
const getAuthStatus = (state) => {
  return state[NameSpace.USERS].authorizationStatus;
};
const getAuth = (state) => {
  return state[NameSpace.USERS].auth;
};

export {
  getActiveOffice,
  getActivePage,
  getPlaces,
  getPopup,
  getAuthStatus,
  getAuth,
};
