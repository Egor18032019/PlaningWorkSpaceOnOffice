import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import Main from "./main.tsx";
import withMain from "./whit-main";
const MainWrapped = withMain(Main);
import ChoicePlaces from "./choiсe-plaсes.jsx";
import ImportButton from "./import_button.jsx";
import Loader from "./loader.jsx";
import Login from "./login.jsx";
import {LOGIN_ROUTE, PROP_ROUTE, OFFISE_STATE} from "../const.js";
// import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = (props) => {
  const {activeOffice, handlerClickOnChoise, activePage, activePlace, onPinClick,
    places, handlerSubmitForAdd, getNewData, auth, firestore,
    authorizationStatus} = props;

  return (
    <Switch>
      <Route exact path="/"
        render={(routeProps) => {
          // console.log(routeProps);
          if (activePage === OFFISE_STATE) {
            return (
              <MainWrapped
                activeOffice={activeOffice}
                activePlace={activePlace}
                onPinClick={onPinClick}
                places={places}
                handlerSubmitForAdd={handlerSubmitForAdd}
                handlerClickOnChoise={handlerClickOnChoise}
                auth={auth}
                authorizationStatus={authorizationStatus}
                firestore={firestore}
              />);
          }
          return (
            <div className="promo__choise">
              <ChoicePlaces
                onChoiseOfficeClick={handlerClickOnChoise}
                firestore={firestore}
              />
              <ImportButton
                getNewData={getNewData}
              />
            </div>
          );
        }}>
      </Route>
      <Route exact path={PROP_ROUTE}>
        <Loader />
      </Route>
      <Route exact path={LOGIN_ROUTE}>
        <Login />
      </Route>
    </Switch>
  );
};


AppRouter.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  getNewData: PropTypes.func.isRequired,
  handlerSubmitForAdd: PropTypes.func.isRequired,
  handlerClickOnChoise: PropTypes.func.isRequired,
  activeOffice: PropTypes.string,
  places: PropTypes.array.isRequired,
  activePage: PropTypes.string.isRequired,
  activePlace: PropTypes.object,
  auth: PropTypes.object,
  authorizationStatus: PropTypes.string
};

export default AppRouter;
