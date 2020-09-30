import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";

import PropTypes from "prop-types";

import {ActionActive} from "./data-reducer.js";

/* <!-- Фильтрация объявлений --> */
class MapFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.companyRef = createRef();
    this.departmensRef = createRef();
    this.otdelRef = createRef();
    this.spaceRef = createRef();
    this.genderRef = createRef();
    this.notebook = createRef();
    this.apllebook = createRef();
    this.sistemnik = createRef();
    this.telephone = createRef();
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter() {
    const {handleFilterChange} = this.props;
    handleFilterChange({
      company: this.companyRef.current.value,
      departmens: this.departmensRef.current.value,
      otdel: this.otdelRef.current.value,
      space: this.spaceRef.current.value,
      gender: this.genderRef.current.value,
      notebook: this.notebook.current.checked,
      apllebook: this.apllebook.current.checked,
      sistemnik: this.sistemnik.current.checked,
      telephone: this.telephone.current.checked,
    });
  }

  render() {
    // добавить сортировку по полу
    return (
      <div className="map__filters-container">
        <form action="#" className="map__filters" autoComplete="off">
          <select name="type-space" id="type" className="map__filter" defaultValue="any"
            ref={this.spaceRef}
            onChange={this.handleFilter}>
            <option value="any">Занято/Свободно</option>
            <option value="1">Занято</option>
            <option value="0">Свободно</option>
          </select>
          <select name="type-company" id="type-company" className="map__filter" defaultValue="Любая"
            ref={this.companyRef}
            onChange={this.handleFilter}>
            <option value="any">Тип организации</option>
            <option value="ПАО">ПАО</option>
            <option value="АО">АО</option>
            <option value="Подряд">Подряд</option>
          </select>
          <select name="type-departmens" id="type-departmens" className="map__filter" defaultValue="any"
            ref={this.departmensRef}
            onChange={this.handleFilter}>
            <option value="any">Фильтр по департаменту</option>
            <option value="Операционный">Операционный</option>
            <option value="Разработчики">Разработчики</option>
            <option value="Подрядчики">Подрядчики</option>
          </select>
          <select name="type-otdel" id="type-otdel" className="map__filter" defaultValue="any"
            ref={this.otdelRef}
            onChange={this.handleFilter}>
            <option value="any">Фильтр по отделу</option>
            <option value="АХО">АХО</option>
            <option value="Разработка">Разработка</option>
            <option value="Тестирование">Тестирование</option>
          </select>
          <select name="type-gender" id="type-gender" className="map__filter" defaultValue="any"
            ref={this.genderRef}
            onChange={this.handleFilter}>
            <option value="any">Мужской/Женский</option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
          </select>

          <fieldset id="work-features" className="map__features" onChange={this.handleFilter}>
            <input type="checkbox" name="features" value="notebook" id="filter-notebook"
              className="map__checkbox visually-hidden" ref={this.notebook} />
            <label className="map__feature map__feature--notebook" htmlFor="filter-notebook">Ноутбук</label>
            <input type="checkbox" name="features" value="apllebook" id="filter-apllebook"
              className="map__checkbox visually-hidden" ref={this.apllebook} />
            <label className="map__feature map__feature--apllebook" htmlFor="filter-apllebook">Макбук</label>
            <input type="checkbox" name="features" value="sistemnik" id="filter-sistemnik"
              className="map__checkbox visually-hidden" ref={this.sistemnik} />
            <label className="map__feature map__feature--sistemnik" htmlFor="filter-sistemnik">Системный блок</label>
            <input type="checkbox" name="features" value="telephone" id="filter-telephone"
              className="map__checkbox visually-hidden" ref={this.telephone} />
            <label className="map__feature map__feature--telephone" htmlFor="filter-telephone">Рабочий телефон</label>
          </fieldset>
        </form>
      </div>

    );
  }
}

const mapDispatchToTitle = (dispatch) => ({
  handleFilterChange(filter) {
    dispatch(ActionActive.activeFilter(filter));
  }
});

const mapStateToProps = () => {
  return {
  };
};

MapFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export {MapFilter};
export default connect(mapStateToProps, mapDispatchToTitle)(MapFilter); // первым стате а вторым фдиспатчеры

