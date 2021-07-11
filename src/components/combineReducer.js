import {
  combineReducers
} from 'redux';
import {
  dataReducer
} from './data-reducer.js';
import {
  usersReducer
} from './user-reducer.js';
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USERS]: usersReducer,
});
