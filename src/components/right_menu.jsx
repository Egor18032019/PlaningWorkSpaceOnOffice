import React, {useRef} from "react";
import PropTypes from "prop-types";

import MenuItem from "./menu-item.jsx";

// Меню ФИО

const RightMenu = (props)=>{

  const textRef = useRef();

  const onChange = ()=> {
    const {handleFilterMenu} = props;
    handleFilterMenu(textRef);
  };

  const {places, onPinClick, filterPlaces} = props;
  return (
    <article className="menu">
      <p className="menu-text">Список ФИО И № р.м.</p>

      <input type="text" placeholder="Искать здесь" name="t" ref={textRef} onChange={onChange} />
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
};

RightMenu.propTypes = {
  places: PropTypes.array.isRequired,
  filterPlaces: PropTypes.array.isRequired || null,
  onPinClick: PropTypes.func.isRequired,
  handleFilterMenu: PropTypes.func.isRequired,
};

export default RightMenu;
