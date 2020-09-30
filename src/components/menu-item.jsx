import React from "react";
import PropTypes from "prop-types";

const MenuItem = (props) => {
  const {place} = props;

  function onItemClick() {
    const {onPinClick} = props;
    onPinClick(place);
  }

  if (place) {
    return (
      <li onClick={onItemClick} className="menu-list_item"><span>{place.id}</span> {place.titlle} </li>
    );
  } else {
    return ``;
  }
};


MenuItem.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  place: PropTypes.shape({
  }),
};

export default MenuItem;

