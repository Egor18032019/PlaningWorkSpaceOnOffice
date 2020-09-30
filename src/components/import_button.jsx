import React, {PureComponent} from "react";
import {parse} from "papaparse";

class ImportButton extends PureComponent {

  constructor(props) {
    super(props);
  }

  _handleNewData(e) {
    const {getNewData} = this.props;
    e.preventDefault();
    const file = e.target.files[0];
    let name = file.name;
    let nameForData = name.slice(0, -4);
    if (file.type !== `application/vnd.ms-excel`) {
      // eslint-disable-next-line no-alert
      alert(`Вы загрузили не Excel`);
    }
    // парсит файл и возвращает промис
    const foo = () => {
      let data;
      return new Promise((resolve, reject) => {
        parse(file, {
          header: true,
          download: true,
          dynamicTyping: true,
          complete(results) {
            resolve(data = results.data);
          },
          error(err, file) {
            reject(err);
          }
        });

      });
    };

    const main = async () => { // не смог понять почему еслинт ругаеться
      try {
        const data = await foo();
        const newDataObj = {
          name: nameForData,
          place: data
        };
        getNewData(newDataObj);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Could not parse file`, err);
      }
    };
    main();
  }

  render() {
    return (
      <div className="btn">
        <input type="file" id="images" name="images" className="ad-form__input visually-hidden"
          onChange={(e) => this._handleNewData(e)} />
        <label htmlFor="images" className="ad-form__drop-zone">Загрузить файл...</label>
      </div>);
  }
}

export default ImportButton;
