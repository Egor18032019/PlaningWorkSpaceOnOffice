import React from "react";
import PropTypes from "prop-types";


const LeftPopup = (props) => {

  function handleClose(evt) {
    const {onPinClick} = props;
    evt.preventDefault();
    onPinClick(null);
  }

  function handleCorrect(evt) {
    const {onClickActive, isActive} = props;
    if (isActive) {
      evt.target.reset();
    }
    onClickActive();
  }

  function handleChange(evt, value) {
    const {onChange} = props;
    onChange(evt, value);
  }


  const {activePlace, isActive} = props;
  // console.log(activePlace);
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
          action="https://js.dump.academy/keksobooking" autoComplete="off"
          onSubmit={(evt) => {
            evt.preventDefault();
            handleCorrect(evt);
          }}>
          <img src={avatar} className="popup__avatar" width="70" height="70" alt="Аватар пользователя" />
          <button type="button" className="popup__close" onClick={handleClose} >Закрыть</button>
          <fieldset className="popup-form__element popup-form__element--wide" disabled={!isActive}>
            <label className="popup-form__label" htmlFor="titlle"></label>
            <input id="titlle" name="titlle" type="text" maxLength="100" minLength="1" required
              value={titlle}
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }} />
          </fieldset>
          <fieldset className="popup-form__element popup-form__element--wide" disabled={!isActive}>
            <label className="popup-form__label" htmlFor="address"></label>
            <input id="address" name="address" type="text"
              value={`Рабочее место № ` + id} readOnly />
          </fieldset>
          <fieldset className="popup-form__element" disabled={!isActive} title="Компания">
            <select id="company" name="company" value={company} className="select-css"
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }} >
              <option value="any">не выбрано</option>
              <option value="Темные">Темные</option>
              <option value="Светлые">Светлые</option>
              <option value="Подрядчики">Подрядчики</option>
            </select>
          </fieldset>
          <fieldset className="popup-form__element" disabled={!isActive} title="Департамент">
            <select id="departmens" name="departmens" value={departmens} className="select-css"
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }}>
              <option value="выбрать">не выбрано</option>
              <option value="Главный">Главный</option>
              <option value="РБ">РБ</option>
              <option value="ДФК">ДФК</option>
              <option value="Сеть">Сеть</option>
              <option value="Корус">Корус</option>
              <option value="ПОС">ПОС</option>
            </select>
          </fieldset>
          <fieldset className="popup-form__element" disabled={!isActive} title="Переезд или Остаёться">
            <select id="otdel" name="otdel" value={otdel} className="select-css"
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }}>
              <option value="выбрать">не выбрано</option>
              <option value="Переезд">Переезд</option>
              <option value="Остаётся">Остаётся</option>
            </select>
          </fieldset>
          <fieldset className="popup-form__element popup-form__element--time" disabled={!isActive}>
            <select id="timein" name="timein" defaultValue={timein} className="select-css">
              <option value="09:00">c 09:00</option>
              <option value="10:00">c 10:00</option>
              <option value="11:00">c 11:00</option>
            </select>
            <select id="timeout" name="timeout" title="Time to go out" defaultValue={timeout}
              className="select-css">
              <option value="18:00">до 18:00</option>
              <option value="19:00">до 19:00</option>
              <option value="20:00">до 20:00</option>
            </select>
          </fieldset>
          <fieldset className="popup__features" disabled={!isActive}>
            <legend>Оборудование</legend>
            <input type="checkbox" name="features" value="notebook" id="feature-notebook"
              className="feature__checkbox visually-hidden" checked={checkedNotebook}
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }} />
            <label className="feature popup__feature popup__feature--notebook" htmlFor="feature-notebook" title="Ноутбук">Ноутбук</label>
            <input type="checkbox" name="features" value="apllebook" id="feature-apllebook"
              className="feature__checkbox visually-hidden" checked={checkedApplebook}
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }} />
            <label className="feature popup__feature popup__feature--apllebook" htmlFor="feature-apllebook" title="МакБук">МакБук</label>
            <input type="checkbox" name="features" value="sistemnik" id="feature-sistemnik"
              className="feature__checkbox visually-hidden" checked={checkedSistemnik}
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }} />
            <label className="feature popup__feature popup__feature--sistemnik" htmlFor="feature-sistemnik" title="Системный блок">Системный блок</label>
            <input type="checkbox" name="features" value="telephone" id="feature-telephone"
              className="feature__checkbox visually-hidden" checked={checkedTelephone}
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
              }} />
            <label className="feature popup__feature popup__feature--telephone" htmlFor="feature-telephone" title="Стационарный телефон">Стационарный телефон</label>
          </fieldset>


          <fieldset className="popup-form__element popup-form__element--wide">
            <textarea id="description" name="description"
              value={description}
              onChange={(evt) => {
                handleChange(evt, evt.target.value);
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


};


LeftPopup.propTypes = {
  activePlace: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onPinClick: PropTypes.func.isRequired,
  onClickActive: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LeftPopup;

