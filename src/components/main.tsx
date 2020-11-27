import * as React from "react";
import MapPin from "./map_pin.jsx";
import Pins from "./pins.jsx";
import AdForm from "./ad_form";
import LeftPopup from "./left_popup.jsx";
import MapFilter from "./map_filter.jsx";
import withPopup from "./whit_popup.jsx";
const PopupWrapped = withPopup(LeftPopup);
import { arrayBackGroundImage } from "../const.js";
import ChoicePlaces from "./choiсe-plaсes.jsx";
import CSVDowland from "./csv_button.jsx";
import RightMenu from "./right_menu.jsx";
import { MainProps } from "../types";
import withMenuItem from "./whit_menu_item.jsx";
const MenuItemWrapper = withMenuItem(RightMenu);

const Main = (props: MainProps) => {

  const { activeOffice, isActive, onChangeCoordinate, pinMainCoordinate, onChangeCoordinateY,
    onChangeCoordinateX, coordinateX, coordinateY, activePlace,
    onPinClick, places, handlerSubmitForAdd, handlerClickOnChoise, onClickActive, onMovePoint } = props;
  const BGI = arrayBackGroundImage[activeOffice];

  return (
    <main>
      <div className="promo">
        <h1 className="promo__title visually-hidden">Планировщик рабочих мест.</h1>
        {isActive ?
          <div>
            <ChoicePlaces
              onChoiseOfficeClick={handlerClickOnChoise}
            />
            <CSVDowland
              activeOffice={activeOffice}
              places={places}
            />
          </div>
          : ``
        }
      </div>
      {activePlace && isActive ?
        <PopupWrapped
          activePlace={activePlace}
          onPinClick={onPinClick}
        />
        : ``}
      {isActive ?
        <MenuItemWrapper
          places={places}
          onPinClick={onPinClick}
        /> : ``}
      {/* <!-- Карта рабочих мест --> */}
      <section className={`map ${!isActive ? `map--faded` : ``}`} >
        <MapPin
          isActive={isActive}
          onClickForActive={onClickActive}
          onMovePoint={onMovePoint}
          pinMainCoordinate={pinMainCoordinate}
          onChangeCoordinate={onChangeCoordinate}
          onChangeCoordinateX={onChangeCoordinateX}
          onChangeCoordinateY={onChangeCoordinateY}
        />
        {/* <!-- Метки рабочих мест --> */}
        <Pins
          activePlace={activePlace}
          onPinClick={onPinClick}
          places={places}
        />
        <div className="map__pins" style={{ backgroundImage: `url(` + `${BGI}` + `)` }}>
          <div className="map__overlay">
            <h2 className="map__title">г.{activeOffice} офис</h2>
          </div>

        </div>
        <MapFilter
        activeOffice={activeOffice}
        />
      </section>
      {/* <!-- Форма добавления новых рабочих мест и редактирование старых --> */}
      <section className="notice">
        <h2 className="notice__title">Новое р.м.</h2>
        <AdForm
          isActive={isActive}
          pinMainCoordinate={pinMainCoordinate}
          coordinateY={coordinateY}
          coordinateX={coordinateX}
          handlerSubmitForAdd={handlerSubmitForAdd}
        />
      </section>
    </main >
  );
};


export default Main;
