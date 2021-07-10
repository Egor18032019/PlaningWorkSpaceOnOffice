/* eslint-disable camelcase */

const Ekaterinburg_300 = `Ekaterinburg_300`;
const Ekaterinburg_503 = `Ekaterinburg_503`;
const Ekaterinburg_801 = `Ekaterinburg_801`;
const Ekaterinburg_901 = `Ekaterinburg_901`;
const Ekaterinburg_8new = `Ekaterinburg_8new`;
const Ryazan = `Ryazan`;
const Samara = `Samara`;

const URLGET = {
  Ekaterinburg_300: `https://script.google.com/macros/s/AKfycbwTDGAUveZeTZN1SpWwZC4RY0nkHTZZBRksU2jeXg/exec`,
  Ekaterinburg_503: `https://script.google.com/macros/s/AKfycbxp4hNaJG3Lj1jzu-Tv0wBNyln4txmo-ZQPCMGA8O4y8vCGLdddSoGU/exec`,
  Ekaterinburg_801: `https://script.google.com/macros/s/AKfycby_hcQQ99DAAm1y7E8pZyKHc_OBu0spx94LPorq3m60qhrdPtcR/exec`,
  Ekaterinburg_901: `https://script.google.com/macros/s/AKfycbxlU4-ran0HBA9kFVPT0uh_xxZgHJU2PipOHWVZhcEJEJThaZuK/exec`,
  Ekaterinburg_8new: `https://script.google.com/macros/s/AKfycbx4_-uDTCxQVRLhppd3Mtm8L_1-pzXDiQ5oeSa5jvC4qVtWm0TF/exec`,
  Ryazan: ``,
  Samara: ``,
};

/**
 * коды ошибок
 */
const StatusCode = {
  OK: 200
};


const arrayBackGroundImage = {
  Ekaterinburg_300: `../img/Ekaterinburg_3floor.jpg`,
  Ekaterinburg_503: `../img/Ekaterinburg_5floor.jpg`,
  Ekaterinburg_801: `../img/Ekaterinburg_8floor.jpg`,
  Ekaterinburg_901: `../img/Ekaterinburg_9floor.jpg`,
  Ekaterinburg_8new: `../img/Ekaterinburg_8floor_new.jpg`,
  Ryazan: ``,
  Samara: ``,
};

const LOGIN_ROUTE = `/login`;
const WORK_ROUTE = `/work`;
const PROP_ROUTE = `/property`;
const OFFISE_STATE = `officePage`;
const CHOISE_STATE = `promo__choise`;


export {
  URLGET,
  StatusCode,
  arrayBackGroundImage,
  LOGIN_ROUTE,
  WORK_ROUTE,
  PROP_ROUTE,
  OFFISE_STATE,
  CHOISE_STATE,
  Ekaterinburg_300,
  Ekaterinburg_503,
  Ekaterinburg_801,
  Ekaterinburg_901,
  Ekaterinburg_8new,
  Samara,
  Ryazan
};
