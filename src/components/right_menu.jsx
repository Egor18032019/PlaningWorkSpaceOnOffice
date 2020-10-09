import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

import MenuItem from "./menu-item.jsx";

// Меню ФИО

class RightMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.textRef = createRef();
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const {handleFilterMenu} = this.props;
    handleFilterMenu(this.textRef);
  }

  render() {
    const {places, onPinClick, filterPlaces} = this.props;
    return (
      <article className="menu">
        <p className="menu-text">Список ФИО И № р.м.</p>

        <input type="text" placeholder="Искать здесь" name="t" ref={this.textRef} onChange={this.onChange} />
        <ul className="menu-list">
          {filterPlaces.map(
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
  filterPlaces: PropTypes.array.isRequired || null,
  onPinClick: PropTypes.func.isRequired,
  handleFilterMenu: PropTypes.func.isRequired,
};

export default RightMenu;
