// компонент "Карточка предложения"
import React, {useRef} from "react";
import PropTypes from "prop-types";

const ChoicePlaces = (props) => {
  const menuRef = useRef();
  const handleSubmit = (evt)=> {
    const {onChoiseOfficeClick} = props;
    evt.preventDefault();
    onChoiseOfficeClick(menuRef.current.value);
  };

  return (
    <form action="#" className="map__filters" autoComplete="off"
      onSubmit={handleSubmit}>
      <select name="choise-space" id="choise" className="map__choise" defaultValue="Ekaterinburg 801" ref={menuRef}>
        <option value="Ekaterinburg 801">Екатеринбург 8 этаж 801-802</option>
        <option value="Ekaterinburg 803-816">Екатеринбург 8 этаж 803-816(в процессе)</option>
        <option value="Ekaterinburg 901">Екатеринбург 9 этаж</option>
        <option value="Ryazan">Рязань</option>
        <option value="Samara">Самара офис №</option>
      </select>
      <button> Выбрать офис</button>
    </form>
  );
};

ChoicePlaces.propTypes = {
  onChoiseOfficeClick: PropTypes.func.isRequired,
};


export default ChoicePlaces;
