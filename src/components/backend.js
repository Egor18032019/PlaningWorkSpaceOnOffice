
/**
 * Подгрузить отсортированые данные с базы даных
 * @param {String} activeOffice какой именно этаж
 * @param {*} firestore адрес базы данных
 * @return {Array} массив даннх
 */
const onLoadForm = async (activeOffice, firestore) => {
  return await firestore.collection(activeOffice).orderBy(`id`, `asc`).get()
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
  });
};
/**
 * Сохранить новое место в базе данных
 * @param {*} oldPlaces массив старых данных
 * @param {*} newPlace новое место
 * @param {*} firestore адрес бд
 * @param {*} activeOffice какой именно этаж
 */
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

export {
  onLoadForm,
  onSavePlace
};
