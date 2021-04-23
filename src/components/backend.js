// Получение  данных c гугол форм

const URL = {
  // POST: `https://docs.google.com/spreadsheets/d/1SGp1yxurXuCKLORjjn23pe5eeOCf10unp1diOnEx2xE/edit?usp=sharing`,
  POST: `https://sheets.googleapis.com/v4/spreadsheets/1SGp1yxurXuCKLORjjn23pe5eeOCf10unp1diOnEx2xE:batchUpdate`,
  // POST: `https://docs.google.com/spreadsheets/d/1SGp1yxurXuCKLORjjn23pe5eeOCf10unp1diOnEx2xE/edit?usp=sharing`,
};
// https://sheets.googleapis.com/v4/spreadsheets/AIzaSyACvURZ36YS0q1lcePVxO13mLWuu02uq6g/values/Sheet1!A1:B1?valueInputOption=USER_ENTERED`);
const URLGET = {
  "Ekaterinburg 300": `https://script.google.com/macros/s/AKfycbwTDGAUveZeTZN1SpWwZC4RY0nkHTZZBRksU2jeXg/exec`,
  "Ekaterinburg 503": `https://script.google.com/macros/s/AKfycbxp4hNaJG3Lj1jzu-Tv0wBNyln4txmo-ZQPCMGA8O4y8vCGLdddSoGU/exec`,
  "Ekaterinburg 801": `https://script.google.com/macros/s/AKfycby_hcQQ99DAAm1y7E8pZyKHc_OBu0spx94LPorq3m60qhrdPtcR/exec`,
  "Ekaterinburg 901": `https://script.google.com/macros/s/AKfycbxlU4-ran0HBA9kFVPT0uh_xxZgHJU2PipOHWVZhcEJEJThaZuK/exec`,
  "Ekaterinburg 803-816": `https://script.google.com/macros/s/AKfycbx4_-uDTCxQVRLhppd3Mtm8L_1-pzXDiQ5oeSa5jvC4qVtWm0TF/exec`,
  "Ryazan": ``,
  "Samara": ``,
};

/**
 * коды ошибок
 */
const StatusCode = {
  OK: 200
};


const onLoadForm = (place) => {
  const loadUrl = URLGET[place];
  // console.log(loadUrl);

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

let TIMEOUT_IN_MS = 10000;


let sendRequest = function (onLoad, onError) {
  /**
   * new XMLHttpRequest();
   */
  let xhr = new XMLHttpRequest();
  xhr.responseType = `json`;

  xhr.addEventListener(`load`, function () {
    if (xhr.status === StatusCode.OK) {
      onLoad(xhr.response);
    } else {
      console.log(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
    }
  });
  xhr.addEventListener(`error`, function () {
    console.log(`При получение произошла ошибка соединения`);
  });
  xhr.addEventListener(`timeout`, function () {
    console.log(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
  });

  xhr.timeout = TIMEOUT_IN_MS;
  return xhr;
};

let params = {
  "range": `Sheet1!A1:B1`,
  "majorDimension": `ROWS`,
  "values": [
    [`Hello`, `World`]
  ],
  "requests": [{
    "updateSpreadsheetProperties": {
      "properties": {"title": `My New Title`},
      "fields": `title`
    }
  }]

};

let save = function (data, onLoad) {
  // let xhr = sendRequest(onLoad);
  let xhr = new XMLHttpRequest();
  xhr.open(`POST`, URL.POST);
  console.log(`Не смог насторить отправку в гугл таблицу +(`);
  // xhr.withCredentials = true;
  // // xhr.withCredentials = `true`;
  // xhr.credentials = `include`;
  // // xhr.response.setHeader(`Access-Control-Allow-Credentials`, true);
  // xhr.setRequestHeader(`Access-Control-Allow-Credentials`, true);
  // // xhr.response.setHeader(`Access-Control-Allow-Credentials`, `true`);

  // xhr.setRequestHeader(`Authorization`, `Bearer ` + `AIzaSyCGj2w_AKdEq8MBBeR04IlTght3ZkxZOLg`);
  // // xhr.setRequestHeader(`Content-type`, `application/json;charset=UTF-8`);
  // xhr.send(JSON.stringify(params));
};

// отправка данных в гугол таблицу =  не смог *(


export {
  onLoadForm,
  save
};
