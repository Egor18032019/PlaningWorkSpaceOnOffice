import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


class LeftPopup extends PureComponent {
  constructor(props) {
    super(props);
    this.formRef = createRef();
    this.titlledRef = createRef();
    this.fieldsetTitle = createRef();
    this.idRef = createRef();
    this.fieldsetId = createRef();
    this.type = createRef();
    this.departmens = createRef();
    this.otdel = createRef();
    this.fieldsetType = createRef();
    this.notebook = createRef();
    this.apllebook = createRef();
    this.sistemnik = createRef();
    this.telephone = createRef();
    this.handleClose = this.handleClose.bind(this);
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose(evt) {
    const {onPinClick} = this.props;
    evt.preventDefault();
    onPinClick(null);
  }

  handleCorrect(evt) {
    const {onClickActive, isActive} = this.props;
    if (isActive) {
      evt.target.reset();
    }
    onClickActive();
  }

  handleChange(evt, value) {
    const {onChange} = this.props;
    onChange(evt, value);
  }

  render() {
    const {activePlace, isActive} = this.props;

    if (activePlace) {
      const {id, titlle, departmens, otdel, timein, timeout, description, photo, avatar, company,
        telephone, sistemnik, apllebook, notebook} = activePlace;
      let checkedNotebook = notebook ? true : false;
      let checkedApplebook = apllebook ? true : false;
      let checkedSistemnik = sistemnik ? true : false;
      let checkedTelephone = telephone ? true : false;
      return (
        <article className="map__card popup">
          <form className={`popup-form ${!isActive ? `popup-form--disabled` : ``}`} method="post" encType="multipart/form-data"
            action="https://js.dump.academy/keksobooking" autoComplete="off" ref={this.formRef}
            onSubmit={(evt) => {
              evt.preventDefault();
              this.handleCorrect(evt);
            }}>

            <img src={avatar} className="popup__avatar" width="70" height="70" alt="Аватар пользователя" />
            <button type="button" className="popup__close" onClick={this.handleClose} >Закрыть</button>
            <fieldset className="popup-form__element popup-form__element--wide" disabled={!isActive}
              ref={this.fieldsetTitle}>
              <label className="popup-form__label" htmlFor="titlle"></label>
              <input id="titlle" name="titlle" type="text" maxLength="100" minLength="1" required
                value={titlle} ref={this.titlledRef}
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }} />
            </fieldset>
            <fieldset className="popup-form__element popup-form__element--wide" disabled={!isActive}
              ref={this.fieldsetId}>
              <label className="popup-form__label" htmlFor="address"></label>
              <input id="address" name="address" type="text"
                value={`Рабочее место № ` + id} ref={this.idRef} readOnly />
            </fieldset>
            <fieldset className="popup-form__element" disabled={!isActive} ref={this.fieldsetType}>
              <select id="company" name="company" value={company} ref={this.type} className="select-css"
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }} >
                <option value="выбрать">не выбрано</option>
                <option value="ПАО">ПАО</option>
                <option value="АО">АО</option>
                <option value="Подрядчики">Подрядчики</option>
              </select>
            </fieldset>
            <fieldset className="popup-form__element" disabled={!isActive} title="Департамент">
              <select id="departmens" name="departmens" value={departmens} ref={this.departmens} className="select-css"
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }}>
                <option value="выбрать">не выбрано</option>
                <option value="Операционный">Операционный</option>
                <option value="Разработчики">Разработчики</option>
                <option value="Подрядчики">Подрядчики</option>
              </select>
            </fieldset>
            <fieldset className="popup-form__element" disabled={!isActive}>
              <select id="otdel" name="otdel" value={otdel} ref={this.otdel} className="select-css"
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }}>
                <option value="выбрать">не выбрано</option>
                <option value="АХО">АХО</option>
                <option value="Разработка">Разработка</option>
                <option value="Подрядчики" >Подрядчики</option>
                <option value="Тестирование">Тестирование</option>
                <option value="Аналитики">Аналитики</option>
              </select>
            </fieldset>
            <fieldset className="popup-form__element popup-form__element--time" disabled={!isActive}>
              <select id="timein" name="timein" defaultValue={timein} ref={this.timein} className="select-css">
                <option value="09:00">c 09:00</option>
                <option value="10:00">c 10:00</option>
                <option value="11:00">c 11:00</option>
              </select>
              <select id="timeout" name="timeout" title="Time to go out" defaultValue={timeout}
                ref={this.timeout} className="select-css">
                <option value="18:00">до 18:00</option>
                <option value="19:00">до 19:00</option>
                <option value="20:00">до 20:00</option>
              </select>
            </fieldset>
            <fieldset className="popup__features" disabled={!isActive}>
              <legend>Оборудование</legend>
              <input type="checkbox" name="features" value="notebook" id="feature-notebook"
                className="feature__checkbox visually-hidden" ref={this.notebook} checked={checkedNotebook}
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }} />
              <label className="feature popup__feature popup__feature--notebook" htmlFor="feature-notebook" title="Ноутбук">Ноутбук</label>
              <input type="checkbox" name="features" value="apllebook" id="feature-apllebook"
                className="feature__checkbox visually-hidden" ref={this.apllebook} checked={checkedApplebook}
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }} />
              <label className="feature popup__feature popup__feature--apllebook" htmlFor="feature-apllebook" title="МакБук">МакБук</label>
              <input type="checkbox" name="features" value="sistemnik" id="feature-sistemnik"
                className="feature__checkbox visually-hidden" ref={this.sistemnik} checked={checkedSistemnik}
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }} />
              <label className="feature popup__feature popup__feature--sistemnik" htmlFor="feature-sistemnik" title="Системный блок">Системный блок</label>
              <input type="checkbox" name="features" value="telephone" id="feature-telephone"
                className="feature__checkbox visually-hidden" ref={this.telephone} checked={checkedTelephone}
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }} />
              <label className="feature popup__feature popup__feature--telephone" htmlFor="feature-telephone" title="Стационарный телефон">Стационарный телефон</label>
            </fieldset>


            <fieldset className="popup-form__element popup-form__element--wide">
              <textarea id="description" name="description"
                value={description} ref={this.description}
                onChange={(evt) => {
                  this.handleChange(evt, evt.target.value);
                }} ></textarea>
            </fieldset>

            <div className="popup__photos">
              <img src={photo} className="popup__photo" width="45" height="40" alt="Фотография рм" />
            </div>
            {/* <button className={`popup__button`} type="submit">
              Коректировка </button> */}
          </form>
        </article>
      );

    } else {
      return (``);
    }
  }

}


LeftPopup.propTypes = {
  activePlace: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onPinClick: PropTypes.func.isRequired,
  onClickActive: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LeftPopup;

export {LeftPopup};
