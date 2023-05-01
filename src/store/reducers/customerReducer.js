import { REMOVE_CUSTOMER, ADD_CUSTOMER, ADD_MANY_CUSTOMERS } from "../constants";

const initialState = {
  customers: []
};

const customerReducer = (state = initialState, action) => {
  switch(action.type) {
     case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] }
     case REMOVE_CUSTOMER:
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
     case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] }
     default: 
      return state;
  }
};

export default customerReducer;