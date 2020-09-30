// import React, {PureComponent, React.createRef} from "react";
import * as React from "react";
import { AdFormProps } from "../types";

interface State {
  avatar: number | null,
  avatarPreviewUrl: string | ArrayBuffer,
  photo: string | null,
  photoPreviewUrl: string | ArrayBuffer,
}

class AdForm extends React.PureComponent<AdFormProps, State> {
  formRef: React.RefObject<HTMLFormElement>;
  idRef: React.RefObject<HTMLInputElement> ;
  titledRef: React.RefObject<HTMLInputElement>;
  type: React.RefObject<HTMLSelectElement>;
  departmens: React.RefObject<HTMLSelectElement>;
  timein: React.RefObject<HTMLSelectElement>;
  timeout: React.RefObject<HTMLSelectElement>;
  otdel: React.RefObject<HTMLSelectElement>;
  gender: React.RefObject<HTMLSelectElement>;
  notebook: React.RefObject<HTMLInputElement>;
  apllebook: React.RefObject<HTMLInputElement>;
  sistemnik: React.RefObject<HTMLInputElement>;
  telephone: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLTextAreaElement>;
  photo: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      avatarPreviewUrl: null,
      photo: ``,
      photoPreviewUrl: `null`
    };
    this.formRef = React.createRef();
    this.idRef = React.createRef();
    this.titledRef = React.createRef();
    this.type = React.createRef();
    this.departmens = React.createRef();
    this.timein = React.createRef();
    this.timeout = React.createRef();
    this.otdel = React.createRef();
    this.gender = React.createRef();
    this.notebook = React.createRef();
    this.apllebook = React.createRef();
    this.sistemnik = React.createRef();
    this.telephone = React.createRef();
    this.description = React.createRef();
    this.photo = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleAvatarChange = this._handleAvatarChange.bind(this);
    this._handlePhotoChange = this._handlePhotoChange.bind(this);
    this._handleReset = this._handleReset.bind(this);
  }


  handleSubmit(evt) {
    const { handlerSubmitForAdd, coordinateX, coordinateY } = this.props;
    evt.preventDefault();
    handlerSubmitForAdd(
      {
        id: this.idRef.current.value,
        titlle: this.titledRef.current.value,
        avatar: this.state.avatarPreviewUrl,
        company: this.type.current.value,
        departmens: this.departmens.current.value,
        timein: this.timein.current.value,
        timeout: this.timeout.current.value,
        otdel: this.otdel.current.value,
        gender: this.gender.current.value,
        notebook: this.notebook.current.checked,
        apllebook: this.notebook.current.checked,
        sistemnik: this.notebook.current.checked,
        telephone: this.notebook.current.checked,
        description: this.description.current.value,
        photo: this.state.photoPreviewUrl,
        coordinateX,
        coordinateY,
      }
    );
  }

  _handleAvatarChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    // Запускает процесс чтения данных указанного Blob(file),
    // по завершении, аттрибут result будет содержать данные файла в виде data: URL.
    // Если так не делать то и содержать ничего небудет
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        avatar: file,
        avatarPreviewUrl: reader.result
      });
    };
  }

  _handlePhotoChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    // Запускает процесс чтения данных указанного Blob(file),
    // по завершении, аттрибут result будет содержать данные файла в виде data: URL.
    // Если так не делать то и содержать ничего небудет
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        photo: file,
        photoPreviewUrl: reader.result
      });
    };
  }
  _handleReset() {
    this.setState({
      photo: ``,
      photoPreviewUrl: ``
    });
    this.formRef = null;
  }

  render() {
    const { isActive } = this.props;
    let { avatarPreviewUrl, photoPreviewUrl } = this.state;
    let imagePreview = null;
    let photoPreview = null;
    if (avatarPreviewUrl) {
      imagePreview = (<img src={`${avatarPreviewUrl}`} />);
    } else {
      imagePreview = (<img src="img/muffin-grey.svg" alt="Аватар пользователя" width="40" height="44" />
      );
    }
    if (photoPreviewUrl) {
      photoPreview = (<img src={`${photoPreviewUrl}`} />);
    } else {
      photoPreview = (<img src="img/muffin-grey.svg" alt="Аватар пользователя" width="40" height="44" />
      );
    }
    return (
      <form className={`ad-form ${!isActive ? `ad-form--disabled` : ``}`} method="post" encType="multipart/form-data"
        action="https://js.dump.academy/keksobooking" autoComplete="off" ref={this.formRef}>
        <fieldset className="ad-form-header">
          <legend className="ad-form-header__title">Аватарка сотрудника</legend>
          <div className="ad-form-header__upload">
            <div className="ad-form-header__preview">
              {imagePreview}
            </div>
            <div className="ad-form__field">
              <input type="file" id="avatar" name="avatar" className="ad-form-header__input visually-hidden"
                onChange={(e) => this._handleAvatarChange(e)} />
              <label className="ad-form-header__drop-zone" htmlFor="avatar">Загрузить фото...</label>
            </div>
            <p className="ad-form-header__info">Заполните все обязательные поля.
        Получившееся объявление должно давать коллегам полное представление о новом сотруднике</p>
          </div>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="title">Информация о сотруднике</label>
          <input id="title" name="title" type="text" maxLength={100} minLength={1} required
            placeholder="Тут кто то новенький" ref={this.titledRef} />
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="address">Номер рабочего места</label>
          <input id="address" name="address" type="text" required ref={this.idRef} />
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="type">Тип организации</label>
          <select id="type" name="type" defaultValue="выбрать" ref={this.type}>
            <option value="выбрать">не выбрано</option>
            <option value="ПАО">ПАО</option>
            <option value="АО">АО</option>
            <option value="Подрядчики">Подрядчики</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="departmens">Департамент</label>
          <select id="departmens" name="departmens" defaultValue="выбрать" ref={this.departmens}>
            <option value="выбрать">не выбрано</option>
            <option value="Операционный">Операционный</option>
            <option value="Разработчики">Разработчики</option>
            <option value="Подрядчики">Подрядчики</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--time">
          <label className="ad-form__label" htmlFor="timein">Время работы</label>
          <select id="timein" name="timein" defaultValue="" ref={this.timein}>
            <option value="09:00">Примерно с 9</option>
            <option value="10:00">Примерно с 10</option>
            <option value="11:00">Примерно с 11</option>
          </select>
          <select id="timeout" name="timeout" title="Time to go out" defaultValue="" ref={this.timeout}>
            <option value="18:00">Где то до 18</option>
            <option value="19:00">Где то до 19</option>
            <option value="20:00">Где то до 20</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="otdel">Отдел</label>
          <select id="otdel" name="otdel" defaultValue="выбрать" ref={this.otdel}>
            <option value="выбрать">не выбрано</option>
            <option value="АХО">АХО</option>
            <option value="Разработка">Разработка</option>
            <option value="Подрядчики" >Подрядчики</option>
            <option value="Тестирование">Тестирование</option>
            <option value="Аналитики">Аналитики</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="gender">Пол</label>
          <select id="gender" name="gender" defaultValue="выбрать" ref={this.gender}>
            <option value="выбрать">не выбрано</option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide features" >
          <legend>Оборудование</legend>
          <input type="checkbox" name="features" value="notebook" id="feature-notebook"
            className="feature__checkbox visually-hidden" ref={this.notebook} />
          <label className="feature feature--notebook" htmlFor="feature-notebook">Ноутбук</label>
          <input type="checkbox" name="features" value="apllebook" id="feature-apllebook"
            className="feature__checkbox visually-hidden" ref={this.apllebook} />
          <label className="feature feature--apllebook" htmlFor="feature-apllebook">МакБук</label>
          <input type="checkbox" name="features" value="sistemnik" id="feature-sistemnik"
            className="feature__checkbox visually-hidden" ref={this.sistemnik} />
          <label className="feature feature--sistemnik" htmlFor="feature-sistemnik">Системный блок</label>
          <input type="checkbox" name="features" value="telephone" id="feature-telephone"
            className="feature__checkbox visually-hidden" ref={this.telephone} />
          <label className="feature feature--telephone" htmlFor="feature-telephone">Стационарный телефон</label>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="description">Описание (не обязательно)</label>
          <textarea id="description" name="description"
            placeholder="Здесь расскажите о том кто тут" ref={this.description}></textarea>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label">Фотография рабочего места</label>
          <div className="ad-form__photo-container">
            <div className="ad-form__upload">
              <input type="file" id="images" name="images" className="ad-form__input visually-hidden"
                onChange={(e) => this._handlePhotoChange(e)} />
              <label htmlFor="images" className="ad-form__drop-zone">Загрузить фото...</label>
            </div>
            <div className="ad-form__photo">
              {photoPreview}
            </div>
          </div>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--submit">
          <button className="ad-form__submit" type="submit" onClick={this.handleSubmit}>Опубликовать</button>
    или <button className="ad-form__reset" type="reset" onClick={this._handleReset}>очистить</button>
        </fieldset>
      </form>
    );
  }
}

export default AdForm;
