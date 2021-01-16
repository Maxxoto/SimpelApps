import { combineReducers } from 'redux';

// Import reducer
import { alertReducer } from './alert.reducers';
// import {authReducer} from './auth.reducers';

// Import constant
import { authConstants } from '../constants';

const appReducer = combineReducers({
  //   authReducer,
  alertReducer,
});
const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT) {
    const {
      // List state reducer yang akan direset ketika logout
      alertReducer,
    } = state;

    // Destructuring state
    state = {
      alertReducer,
    };
  }

  return appReducer(state, action);
};

export default rootReducer;
