/* eslint-disable camelcase */
// компонент "Карточка предложения"
import React, {useRef} from "react";
import PropTypes from "prop-types";
import {Ekaterinburg_300,
  Ekaterinburg_503,
  Ekaterinburg_801,
  Ekaterinburg_901,
  Ekaterinburg_8new,
  Samara, Ryazan} from "../const.js";
const ChoicePlaces = (props) => {
  const menuRef = useRef();

  const handleSubmit = (evt)=> {
    const {onChoiseOfficeClick, firestore} = props;
    evt.preventDefault();
    onChoiseOfficeClick(menuRef.current.value, firestore);
  };

  return (
    <form action="#" className="map__filters" autoComplete="off"
      onSubmit={handleSubmit}>
      <select name="choise-space" id="choise" className="map__choise" defaultValue="Ekaterinburg_801" ref={menuRef}>
        <option value={Ekaterinburg_300}>Екатеринбург 3 этаж 300(в процессе)</option>
        <option value={Ekaterinburg_503}>Екатеринбург 5 этаж (в процессе)</option>
        <option value={Ekaterinburg_801}>Екатеринбург 8 этаж 801-802</option>
        <option value={Ekaterinburg_8new}>Екатеринбург 8 этаж 803-816(в процессе)</option>
        <option value={Ekaterinburg_901}>Екатеринбург 9 этаж 901-902</option>
        <option value={Ryazan}>Рязань</option>
        <option value={Samara}>Самара офис №</option>
      </select>
      <button> Выбрать офис</button>
    </form>
  );
};

ChoicePlaces.propTypes = {
  onChoiseOfficeClick: PropTypes.func.isRequired,
  firestore: PropTypes.object.isRequired,
};


export default ChoicePlaces;
