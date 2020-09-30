import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Pin from "./pin.jsx";

// Метка объявлений
class Pins extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {places, onPinClick, activePlace} = this.props;

    if (places.length > 0) {
      return (
        places.map(
            (place) => {
              return (
                <Pin
                  place={place}
                  activePlace={activePlace}
                  onPinClick={onPinClick}
                  key={place.id + place.titlle}
                />
              );
            })
      );
    } else {
      return (null);
    }

  }
}


Pins.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  places: PropTypes.array.isRequired,
  activePlace: PropTypes.object || null
};

export default Pins;
