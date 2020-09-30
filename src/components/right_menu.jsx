import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MenuItem from "./menu-item.jsx";


// Меню ФИО

class RightMenu extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {places, onPinClick} = this.props;

    return (
      <article className="menu">
        <p className="menu-text">Список ФИО И № р.м.</p>
        <ul className="menu-list">
          {places.map(
              (place) => {
                return (
                  <MenuItem
                    place={place}
                    onPinClick={onPinClick}
                    key={place.id + place.titlle}
                  />
                );
              })}
        </ul>
        <b>Итого {places.length} рабочих мест</b>
      </article>
    );
  }
}


RightMenu.propTypes = {
  places: PropTypes.array.isRequired,
  onPinClick: PropTypes.func.isRequired,
};

export default RightMenu;
