const forCompanyFilter = (place, filter) => {
  return place.company === filter.company || filter.company === `any`;
};
const forDepartamensFilter = (place, filter) => {
  return place.departmens === filter.departmens || filter.departmens === `any`;
};
const forOtdelFilter = (place, filter) => {
  return place.otdel === filter.otdel || filter.otdel === `any`;
};
const forGenderFilter = (place, filter) => {
  return place.gender === filter.gender || filter.gender === `any`;
};
const forNotebookFilter = (place, filter) => {
  return place.notebook === filter.notebook || filter.notebook === false;
};
const forApllebookFilter = (place, filter) => {
  return place.apllebook === filter.apllebook || filter.apllebook === false;
};
const forSistemnikFilter = (place, filter) => {
  return place.sistemnik === filter.sistemnik || filter.sistemnik === false;
};
const forTelephoneFilter = (place, filter) => {
  return place.telephone === filter.telephone || filter.telephone === false;
};
const forSpaceFilter = (place, filter) => {
  if (filter.space < 1) {
    return place.titlle === ``;
  } else if (filter.space > 0) {
    return place.titlle.length > 1;
  }
  return place;
};


// TODO: сделать тест на функцию сортировки

/**
 * Функция сортировки
 * @param {*} data массив с данными
 * @param {*} filter массив с фильтрами
 * @return {Array} массив отфильтрованых данных
 */
const onSortPins = (data, filter) => {
  return data.filter((place) => {
    return forCompanyFilter(place, filter) && forDepartamensFilter(place, filter) &&
      forOtdelFilter(place, filter) && forSpaceFilter(place, filter) && forGenderFilter(place, filter)
      && forNotebookFilter(place, filter) && forApllebookFilter(place, filter) && forSistemnikFilter(place, filter)
      && forTelephoneFilter(place, filter);
  });
};

export {
  onSortPins
};
