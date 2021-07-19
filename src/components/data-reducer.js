
import {
  onSortPins,
} from "../utils.js";
import {
  onLoadForm,
} from "../components/backend.js";

// Определяем действия(actions)
const ActionType = {
  ADD_PLACE: `CHANGE_OFFICE`,
  ACTIVE_PLACE: `ACTIVE_PLACE`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFICE: `GET_OFFiCE`,
  FILTER_OFFERS: `FILTER_OFFERS`,
  GET_OFFERS_FAIL: `GET_OFFERS_FAIL`,
  GET_SERVER_STATUS: `GET_SERVER_STATUS`,
};


// Объект начального состояния(state):
const initialState = {
  page: `choisePage`,
  office: ``,
  places: [],
  popup: null,
  originalPlaces: [],
  isDataLoaded: false,
  errorMessage: ``,
};


// запрос на сервер
const Operation = {
  loadDataAsync: (place, firestore) => (dispatch) => {
    return onLoadForm(place, firestore).then((response) => {
      dispatch(ActionActive.getDataOffers(response));
      dispatch(ActionActive.activeState(place));
      dispatch(setIdDataLoaded(true, ``));
    });
  }
};


const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        originalPlaces: action.payload,
        places: action.payload
      });
    case ActionType.GET_OFFICE:
      return Object.assign({}, state, {
        page: `officePage`,
        office: action.office,
        popup: null
      });
    case ActionType.GET_OFFERS_FAIL:
      return Object.assign({}, state, {
        page: `officePage`,
        office: action.payload.name,
        originalPlaces: action.payload.place,
        places: action.payload.place
      });
    case ActionType.ADD_PLACE:
      let stateDataRewriteArray = [...state.places];
      let newPlace = action.payload;
      let index = stateDataRewriteArray.findIndex((it) => it.id === newPlace.id);
      if (index > -1) {
        // если пин не двигали и сразу стали вводить номер р.м. то он ищет по номеру р.м. в масиве и  подставляет данные
        if (!newPlace.coordinateX || !newPlace.coordinateY) {
          newPlace.coordinateX = stateDataRewriteArray[index].coordinateX;
          newPlace.coordinateY = stateDataRewriteArray[index].coordinateY;
        }
        stateDataRewriteArray[index] = newPlace;
      } else {
        stateDataRewriteArray.push(newPlace);
      }


      return Object.assign({}, state, {
        places: stateDataRewriteArray
      });
    case ActionType.ACTIVE_PLACE:
      return Object.assign({}, state, {
        popup: action.payload
      });
    case ActionType.FILTER_OFFERS:
      let statePlaceRewriteForFilter = [...state.originalPlaces];
      let filter = action.payload;
      let filterPlaces = onSortPins(statePlaceRewriteForFilter, filter);
      return Object.assign({}, state, {
        places: filterPlaces
      });
    case ActionType.GET_SERVER_STATUS:
      return Object.assign({}, state, {
        isDataLoaded: action.isDataLoaded,
        errorMessage: action.errorMessage
      });
  }
  return state;
};


const ActionActive = {
  activeState: (place) => ({
    type: ActionType.GET_OFFICE, // обязательно поле type
    office: place
  }),
  getDataOffers: (data) => ({
    type: ActionType.GET_OFFERS, // обязательно поле type
    payload: data
  }),
  activeNewState: (newDataObj) => ({
    type: ActionType.GET_OFFERS_FAIL, // обязательно поле type
    payload: newDataObj
  }),
  activePopup: (place) => ({
    type: ActionType.ACTIVE_PLACE,
    payload: place
  }),
  activeFilter: (filter) => ({
    type: ActionType.FILTER_OFFERS,
    payload: filter
  })
};

const ActionPlace = {
  addPlace: (place) => ({
    type: ActionType.ADD_PLACE,
    payload: place,
  }),
};

/**
 * @param {status} status bool-ево значение.
 * @param {err} err ошибка.
 * @return{isDataLoaded} статус загрузки(позже за диспатчим его в загрузчик(по другому не придумал))
 */
const setIdDataLoaded = (status, err) => {
  return {
    type: ActionType.GET_SERVER_STATUS,
    isDataLoaded: status,
    errorMessage: err
  };
};

export {
  dataReducer,
  ActionType,
  ActionActive,
  ActionPlace,
  Operation,
  setIdDataLoaded
};
