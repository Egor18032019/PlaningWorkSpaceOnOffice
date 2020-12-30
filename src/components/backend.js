// Получение  данных c гугол форм


const URL = {
  POST: `https://sheets.googleapis.com/v4/spreadsheets/AIzaSyACvURZ36YS0q1lcePVxO13mLWuu02uq6g/values:batchUpdate`,
  // POST: `https://script.google.com/macros/s/AKfycby_hcQQ99DAAm1y7E8pZyKHc_OBu0spx94LPorq3m60qhrdPtcR/exec`,
};

const URLGET = {
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
  // console.log(place);
  let loadUrl = URLGET[place];

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
      reject(new Error(`Network Error`));
    };
    xhr.send();
  });
};

//  ----------------

// отправка данных в гугол таблицу =  не смог *(


export {
  onLoadForm,
};
