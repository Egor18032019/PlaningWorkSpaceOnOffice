import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionActive, ActionPlace} from "./data-reducer.js";
import {getActiveOffice, getActivePage, getPopup, getPlaces} from "./selectors.js";
import Main from "./main.tsx";
import withMain from "./whit-main";
const MainWrapped = withMain(Main);
import ChoicePlaces from "./choiсe-plaсes.jsx";
import ImportButton from "./import_button.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {activeOffice, handlerClickOnChoise, activePage, activePlace, onPinClick,
      places, handlerSubmitForAdd, getNewData} = this.props;
    if (activePage === `officePage`) {
      return (
        <MainWrapped
          activeOffice={activeOffice}
          activePlace={activePlace}
          onPinClick={onPinClick}
          places={places}
          handlerSubmitForAdd={handlerSubmitForAdd}
          handlerClickOnChoise={handlerClickOnChoise}
        />
      );
    } else {
      return (
        <div>
          <ChoicePlaces
            onChoiseOfficeClick={handlerClickOnChoise}
          />
          <ImportButton
            getNewData={getNewData}
          />
        </div>
      );
    }
  }

  render() {
    const {activeOffice, onPinClick, activePlace, places, handlerSubmitForAdd} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <MainWrapped
              activeOffice={activeOffice}
              activePlace={activePlace}
              handlerSubmitForAdd={handlerSubmitForAdd}
              places={places}
              onPinClick={onPinClick} />
          </Route>
          <Route exact path="/login">

          </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

const mapDispatchToTitle = (dispatch) => ({
  handlerClickOnChoise(place) {
    dispatch(ActionActive.activeState(place));
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
  };
};

App.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  getNewData: PropTypes.func.isRequired,
  handlerSubmitForAdd: PropTypes.func.isRequired,
  handlerClickOnChoise: PropTypes.func.isRequired,
  activeOffice: PropTypes.string,
  places: PropTypes.array.isRequired,
  activePage: PropTypes.string.isRequired,
  activePlace: PropTypes.object,
};

export {App};
export default connect(mapStateToProps, mapDispatchToTitle)(App); // первым стате а вторым фдиспатчеры
