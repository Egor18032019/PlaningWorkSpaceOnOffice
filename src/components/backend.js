
import {URLGET, StatusCode} from "../const.js";

const onLoadForm = async (place, firestore) => {
  return await firestore.collection(place).get()
  .then((querySnapshot) => {
    let places = [];
    querySnapshot.forEach((doc) => {
      let dateWithFirebaseId = doc.data();
      dateWithFirebaseId[`fid`] = doc.id;
      places.push(dateWithFirebaseId);
    }
    );
    return places;
    // добавь фильтр через then что бы id отображалась
  }).then((response)=>{
    const sortResponse = response.sort((a, b) =>{
      return a.id - b.id;
    });
    return sortResponse;
  });

};

const onSavePlace = async (oldPlaces, newPlace, firestore, activeOffice)=>{
  let index = oldPlaces.findIndex((it) =>{
    return it.id === newPlace.id;
  });

  if (index > -1) {
    firestore.collection(activeOffice).doc(oldPlaces[index].fid).delete().then(() => {
      console.log(`Document successfully deleted!`);
    }).catch((error) => {
      console.error(`Error removing document: `, error);
    });
  } else {
    // Add a new document with a generated id.
    firestore.collection(activeOffice).doc().set(newPlace);
  }
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
  onSavePlace
};
