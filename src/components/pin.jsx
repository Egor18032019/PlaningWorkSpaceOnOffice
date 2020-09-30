import React from "react";
import PropTypes from "prop-types";

const Pin = (props) => {
  const {place, activePlace} = props;

  function onPinClickForPopup() {
    // ожидаю что при клике на другой пин и передачи  onPinClick(null);
    //  popup удаляеться так как нет  данных и
    // весь его стайт сбрасывается
    // ожидания не  оправдываються
    // если удалять popup.remove(); то он всё равно не работает
    // const popup = document.querySelector(`.popup-form`);
    const {onPinClick} = props;
    onPinClick(place);
  }

  if (place) {
    let classForActive = ``;
    if (place === activePlace) {
      classForActive = `active`;
    }
    const {coordinateX, coordinateY, id} = place;
    /**
     * Ширина пина
     */
    let pinWidth = 20;
    // высота пина
    let pinHeight = 20;
    let coordinateXcurrent = coordinateX + pinWidth + `px`;
    let coordinateYcurrent = coordinateY + pinHeight + `px`;
    return (
      <button type="button" className={`map__pin ` + classForActive} style={{left: coordinateXcurrent, top: coordinateYcurrent}}
        onClick={onPinClickForPopup}>
        {/* если картинку то не видно номера места. Подумать про другие варианты */}
        {/* <img src="img/avatars/user02.png" width="20" height="20" draggable="false"
          alt="Метка объявления" /> */}
        <span>{id}</span>
      </button>
    );
  } else {
    return ``;
  }
};


Pin.propTypes = {
  onPinClick: PropTypes.func.isRequired,
  place: PropTypes.shape({
  }),
};

export default Pin;

