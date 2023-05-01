import { ADD_CASH, GET_CASH } from "../constants";

const initialState = {
  cash: 10
};

const cashReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload }
    case GET_CASH: 
      return { ...state, cash: state.cash - action.payload }
    default: 
      return state;
  }
};

export default cashReducer;