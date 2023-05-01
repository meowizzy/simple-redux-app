import { REMOVE_CUSTOMER, ADD_CUSTOMER } from "../constants";

const initialState = {
  customers: []
};

const customerReducer = (state = initialState, action) => {
  switch(action.type) {
     case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
     case REMOVE_CUSTOMER:
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
     default: 
      return state;
  }
};

export default customerReducer;