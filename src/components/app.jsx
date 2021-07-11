import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {useAuthState} from "react-firebase-hooks/auth";
import {ActionActive, ActionPlace, Operation} from "./data-reducer.js";
import {Operation as OperationUser} from "./user-reducer.js";
import {
  getActiveOffice, getActivePage, getPopup, getFireStore,
  getPlaces, getAuth, getAuthStatus
} from "./selectors.js";
import Loader from "./loader.jsx";
import AppRouter from "./app_router.jsx";
import Navbar from "./nav_bar.jsx";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";

const App = (props) => {
  const {activeOffice, handlerClickOnChoise, activePage, activePlace, onPinClick,
    places, handlerSubmitForAdd, firestore, getNewData, auth, signOut,
    authorizationStatus} = props;
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  // const [dbPlanning] = useCollectionData(
  //     firestore.collection(activeOffice).orderBy(`id`)
  // );
  // console.log(activeOffice);
  // console.log(dbPlanning);
  // // if (places && authorizationStatus === `AUTH`) {
  //   console.log(user.uid);

  //   // console.log(dbPlanning.length);
  //   places.forEach((element) => {
  //     firestore.collection(activeOffice).add({
  //       id: element.id,
  //       titlle: element.titlle,
  //       company: element.company,
  //       departmens: element.departmens,
  //       otdel: element.otdel,
  //       gender: element.gender,
  //       coordinateX: element.coordinateX,
  //       coordinateY: element.coordinateY,
  //       avatar: element.avatar,
  //       timein: element.timein,
  //       timeout: element.timeout,
  //       description: element.description,
  //       photo: element.photo,
  //       notebook: element.notebook,
  //       apllebook: element.apllebook,
  //       sistemnik: element.sistemnik,
  //       telephone: element.telephone,
  //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     });
  //   });

  // }

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar
        auth={auth}
        signOut={signOut}
      />
      <AppRouter
        activeOffice={activeOffice}
        activePlace={activePlace}
        onPinClick={onPinClick}
        activePage={activePage}
        places={places}
        handlerSubmitForAdd={handlerSubmitForAdd}
        handlerClickOnChoise={handlerClickOnChoise}
        getNewData={getNewData}
        auth={auth}
        authorizationStatus={authorizationStatus}
        firestore={firestore}
      />
    </BrowserRouter >
  );
};

const mapDispatchToTitle = (dispatch) => ({
  handlerClickOnChoise(place, firestore) {
    dispatch(Operation.loadDataAsync(place, firestore));
  },
  signOut() {
    dispatch(OperationUser.signOut());
  },
  getNewData(newDataObj) {
    dispatch(ActionActive.activeNewState(newDataObj));
  },
  onPinClick(activePlace) {
    dispatch(ActionActive.activePopup(activePlace));
  },
  handlerSubmitForAdd(adPlace) {
    if (adPlace.id) {
      dispatch(ActionPlace.addPlace(adPlace));
    } else {
      // eslint-disable-next-line no-alert
      alert(`Заполните все поля`);
    }
  },
});

const mapStateToProps = (store) => {
  return {
    activeOffice: getActiveOffice(store),
    activePage: getActivePage(store),
    activePlace: getPopup(store),
    places: getPlaces(store),
    firestore: getFireStore(store),
    auth: getAuth(store),
    authorizationStatus: getAuthStatus(store),
  };
};

App.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  getNewData: PropTypes.func.isRequired,
  handlerSubmitForAdd: PropTypes.func.isRequired,
  handlerClickOnChoise: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  activeOffice: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  activePage: PropTypes.string.isRequired,
  activePlace: PropTypes.object,
  firestore: PropTypes.object,
  auth: PropTypes.object.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToTitle)(App); // первым стате а вторым фдиспатчеры
