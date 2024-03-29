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
    this.formRef = createRef();
    this.handleFilter = this.handleFilter.bind(this);
    this._handleReset = this._handleReset.bind(this);
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
  _handleReset() {
    this.formRef.current.reset();
  }
  render() {

    return (
      <div className="map__filters-container">
        <form action="#" className="space__filters" autoComplete="off" ref={this.formRef}>
          <select name="type-space" id="type-space" className="space__filter" defaultValue="any"
            ref={this.spaceRef}
            onChange={this.handleFilter}>
            <option value="any">Занято/Свободно</option>
            <option value="1">Занято</option>
            <option value="0">Свободно</option>
          </select>
          <select name="type-company" id="type-company" className="space__filter" defaultValue="Любая"
            ref={this.companyRef}
            onChange={this.handleFilter}>
            <option value="any">Тип организации</option>
            <option value="Темные">Темные</option>
            <option value="Светлые">Светлые</option>
            <option value="Подрядчики">Подрядчики</option>
          </select>
          <select name="type-departmens" id="type-departmens" className="space__filter" defaultValue="any"
            ref={this.departmensRef}
            onChange={this.handleFilter}>
            <option value="any">Фильтр по департаменту</option>
            <option value="Главный">Главный</option>
            <option value="РБ">РБ</option>
            <option value="ДФК">ДФК</option>
            <option value="Сеть">Сеть</option>
            <option value="Корус">Корус</option>
            <option value="Благо">Благо</option>
            <option value="ПОС">ПОС</option>
            <option value="Масс">Масс</option>
          </select>
          <select name="type-otdel" id="type-otdel" className="space__filter" defaultValue="any"
            ref={this.otdelRef}
            onChange={this.handleFilter}>
            <option value="any">Переезд/Остаётся</option>
            <option value="Переезд">Переезд</option>
            <option value="Остаётся">Остаётся</option>
          </select>
          <select name="type-gender" id="type-gender" className="space__filter" defaultValue="any"
            ref={this.genderRef}
            onChange={this.handleFilter}>
            <option value="any">Мужской/Женский</option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
          </select>

          <fieldset id="work-features" className="space__features" onChange={this.handleFilter}>
            <input type="checkbox" name="features" value="notebook" id="filter-notebook"
              className="space__checkbox visually-hidden" ref={this.notebook} />
            <label className="space__feature space__feature--notebook" htmlFor="filter-notebook">Ноутбук</label>
            <input type="checkbox" name="features" value="apllebook" id="filter-apllebook"
              className="space__checkbox visually-hidden" ref={this.apllebook} />
            <label className="space__feature space__feature--apllebook" htmlFor="filter-apllebook">Макбук</label>
            <input type="checkbox" name="features" value="sistemnik" id="filter-sistemnik"
              className="space__checkbox visually-hidden" ref={this.sistemnik} />
            <label className="space__feature space__feature--sistemnik" htmlFor="filter-sistemnik">Системный блок</label>
            <input type="checkbox" name="features" value="telephone" id="filter-telephone"
              className="space__checkbox visually-hidden" ref={this.telephone} />
            <label className="space__feature space__feature--telephone" htmlFor="filter-telephone">Рабочий телефон</label>
          </fieldset>
        </form>
      </div>

    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.activeOffice !== this.props.activeOffice) {
      this._handleReset();
    }
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
  activeOffice: PropTypes.string.isRequired,
};

export {MapFilter};
export default connect(mapStateToProps, mapDispatchToTitle)(MapFilter); // первым стате а вторым фдиспатчеры

