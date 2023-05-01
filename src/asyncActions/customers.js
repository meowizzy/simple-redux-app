import { addManyCustomersAction } from "../store/actions/index";

export const fetchCustomers = () => {
     return dispatch => {
          fetch("https://jsonplaceholder.typicode.com/users")
               .then(response => response.json())
               .then(res => {
                    dispatch(addManyCustomersAction(res))
               });
     }
};