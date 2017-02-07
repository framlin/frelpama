import { combineReducers } from 'redux';
import PartsListReducer from './parts_list_reducer';

const rootReducer = combineReducers({
  parts: PartsListReducer
});

export default rootReducer;
