import { ADD_CASH, ADD_CUSTOMER, GET_CASH, REMOVE_CUSTOMER, ADD_MANY_CUSTOMERS } from "../constants";

export const addCash = cash => {
     return {
          type: ADD_CASH,
          payload: cash
     }
};


export const getCash = cash => {
     return {
          type: GET_CASH,
          payload: cash
     }
};


export const addCustomer = customer => {
     return {
          type: ADD_CUSTOMER,
          payload: customer
     }
};


export const removeCustomer = id => {
     return {
          type: REMOVE_CUSTOMER,
          payload: id
     }
};

export const addManyCustomersAction = customers => {
     return {
          type: ADD_MANY_CUSTOMERS,
          payload: customers
     }
};