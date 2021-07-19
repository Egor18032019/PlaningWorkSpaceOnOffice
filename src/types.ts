import { object } from "prop-types"

type func = () => {}
type noop = () => void

interface AppProps {
  onPinClick: func,
  handlerClickOnChoise: func,
  handlerSubmitForAdd: func,
  activeOffice: string,
  activePage: string,
  places: {}[],
  activePlace: object,
};

interface MainProps {
  onPinClick: func,
  onClickActive: func,
  onMovePoint: func,
  onChangeCoordinate: func,
  onChangeCoordinateY: func,
  onChangeCoordinateX: func,
  handlerSubmitForAdd: func,
  handlerClickOnChoise: func,
  activeOffice: string,
  coordinateX: number,
  coordinateY: number,
  isActive: boolean,
  activePlace: object,
  pinMainCoordinate: string,
  places: [],
  authorizationStatus: string,
  firestore:object,
  auth: any //поправить !
};

interface AdFormProps {
  handlerSubmitForAdd: ({ }) => {},
  firestore:any,
  activeOffice:string,
  pinMainCoordinate: string,
  isActive: boolean,
  coordinateX: number,
  coordinateY: number,
  places:any // исправить
};

export {
  AppProps,
  MainProps,
  AdFormProps,
  func,
  noop,
}
