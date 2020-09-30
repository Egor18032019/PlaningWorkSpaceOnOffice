// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class ChoicePlaces extends PureComponent {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();
    // не придумал как вынести это в hoc === оставил тут
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form action="#" className="map__filters" autoComplete="off"
        onSubmit={this.handleSubmit}>
        <select name="choise-space" id="choise" className="map__choise" defaultValue="Ekaterinburg 801" ref={this.menuRef}>
          <option value="Ekaterinburg 801">Екатеринбург 8 этаж</option>
          <option value="Ekaterinburg 901">Екатеринбург 9 этаж</option>
          <option value="Ryazan">Рязань</option>
          <option value="Samara">Самара</option>
        </select>
        <button> Выбрать офис</button>
      </form>
    );
  }

  handleSubmit(evt) {
    const {onChoiseOfficeClick} = this.props;
    evt.preventDefault();
    onChoiseOfficeClick(this.menuRef.current.value);
  }

}

ChoicePlaces.propTypes = {
  onChoiseOfficeClick: PropTypes.func.isRequired,
};


export default ChoicePlaces;
