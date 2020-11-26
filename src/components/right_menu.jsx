import React, {useRef} from "react";
import PropTypes from "prop-types";

import MenuItem from "./menu-item.jsx";

// Меню ФИО

const RightMenu = (props) => {
  const textRef = useRef();

  function onChange() {
    const {handleFilterMenu} = props;
    handleFilterMenu(textRef);
  }

  const dragAndDrop = () => {

    const pinRef = useRef(null);

    const handleDown = (e) => {

      e.preventDefault();
      const escFunction = (evt) => {
        if (evt.keyCode === 27) {
          setupDialogElement.onmousemove = null;
          pinRef.current.onmouseup = null;
          document.removeEventListener(`keydown`, escFunction, false);
        }
      };
      document.addEventListener(`keydown`, escFunction, false);

      const setupDialogElement = document.querySelector(`main`);
      let rect = setupDialogElement.getBoundingClientRect();
      pinRef.current.style.cursor = `pointer`;
      let pinWidth = pinRef.current.offsetWidth;
      moveAt(e);

      function moveAt(evt) {
        evt.preventDefault();
        let coordX = evt.clientX - rect.left;


        let coordY = evt.clientY - rect.top;
        if ((coordY < 25) || (coordY > 1100)) {
          setupDialogElement.onmousemove = null;
          pinRef.current.onmouseup = null;
          coordY = Math.max(25, Math.min(coordY, 1100));
        }

        if ((coordX < -250) || (coordX > 1400)) {
          setupDialogElement.onmousemove = null;
          pinRef.current.onmouseup = null;
          coordX = Math.max(-250, Math.min(coordX, 1400));
        }
        coordX = Math.max(-250, Math.min(coordX, 1400));

        let coordinateY = coordY - 35 + `px`;
        // let coordinateX = coordX + pinWidth / 2 + `px`;
        let coordinateX = coordX + pinWidth + `px`;

        pinRef.current.style.top = coordinateY;
        pinRef.current.style.left = coordinateX;
      }

      // 3, перемещать в пределах выбранной области
      setupDialogElement.onmousemove = function (ev) {
        moveAt(ev);
      };

      // 4. отследить окончание переноса
      pinRef.current.onmouseup = function (upEvt) {
        console.log(`onmouseup`);
        upEvt.preventDefault();
        setupDialogElement.onmousemove = null;
        pinRef.current.onmouseup = null;
      };
      // 5. Чтоб не обрабатывался как картинка браузером
      pinRef.current.ondragstart = function () {
        return false;
      };
    };

    return (
      <article className="menu menu-drag" ref={pinRef}
        onMouseDown={handleDown}>
        <p className="menu-text">Список ФИО И № р.м.</p>
        <input type="text" placeholder="Искать здесь" name="search" ref={textRef} onChange={onChange} />
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
  const {places, onPinClick, filterPlaces} = props;
  return (dragAndDrop());
};

RightMenu.propTypes = {
  places: PropTypes.array.isRequired,
  filterPlaces: PropTypes.array.isRequired || null,
  onPinClick: PropTypes.func.isRequired,
  handleFilterMenu: PropTypes.func.isRequired,
};

export default RightMenu;
