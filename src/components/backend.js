// Получение  данных c гугол форм


let URL = {
  POST: `https://sheets.googleapis.com/v4/spreadsheets/AIzaSyACvURZ36YS0q1lcePVxO13mLWuu02uq6g/values:batchUpdate`,
  // POST: `https://script.google.com/macros/s/AKfycby_hcQQ99DAAm1y7E8pZyKHc_OBu0spx94LPorq3m60qhrdPtcR/exec`,
  GET801: `https://script.google.com/macros/s/AKfycby_hcQQ99DAAm1y7E8pZyKHc_OBu0spx94LPorq3m60qhrdPtcR/exec`,
  GET901: `https://script.google.com/macros/s/AKfycbxlU4-ran0HBA9kFVPT0uh_xxZgHJU2PipOHWVZhcEJEJThaZuK/exec`
};

/**
 * коды ошибок
 */
const StatusCode = {
  OK: 200
};


const onLoadForm = (place) => {
  // console.log(place);
  let loadUrl = ``;
  if (place === `Ekaterinburg 901`) {
    loadUrl = URL.GET901;
  }
  if (place === `Ekaterinburg 801`) {
    loadUrl = URL.GET801;
  }

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
