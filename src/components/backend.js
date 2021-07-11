// Получение  данных c гугол форм
const URL = {
  // POST: `https://docs.google.com/spreadsheets/d/1SGp1yxurXuCKLORjjn23pe5eeOCf10unp1diOnEx2xE/edit?usp=sharing`,
  POST: `https://sheets.googleapis.com/v4/spreadsheets/1SGp1yxurXuCKLORjjn23pe5eeOCf10unp1diOnEx2xE:batchUpdate`,
  // POST: `https://docs.google.com/spreadsheets/d/1SGp1yxurXuCKLORjjn23pe5eeOCf10unp1diOnEx2xE/edit?usp=sharing`,
};


import {URLGET, StatusCode} from "../const.js";

const onLoadForm = async (place, firestore) => {
  return await firestore.collection(place).get()
  .then((querySnapshot) => {
    let places = [];
    querySnapshot.forEach((doc) => {
      places.push(doc.data());
    }
    );
    return places;
    // добавь фильтр через then что бы id отображалась
  });
};
// загрузка с гугол табел
// + добавить в loadDataAsync
// const data = adapter(response);
const onLoadFormOld = (place) => {
  const loadUrl = URLGET[place];

  return new Promise(function (resolve, reject) {

    let xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.open(`GET`, loadUrl, true);
    xhr.onload = function () {
      if (this.status === StatusCode.OK) {

        // если всё хорошо то вызываем у промиса метод резолве и в него передаем ответ сервера
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function () {
      reject(new Error(`Network Error from Google`));
    };
    xhr.send();
  });
};

//  ----------------

export {
  onLoadForm,

};
