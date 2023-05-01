import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../asyncActions/customers';
import { getCash, addCash, addCustomer, removeCustomer } from '../store/actions';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  const handleAddCash = cash => {
    dispatch(addCash(cash));
  };

  const handleGetCash = cash => {
    dispatch(getCash(cash)); 
  };

  const handleAddCustomer = name => {
    dispatch(addCustomer({
      id: Date.now(),
      name
    }));
  };

  const handleRemoveCustomer = id => {
    dispatch(removeCustomer(id));
  };

  useEffect(() => {
    dispatch(fetchCustomers())
  }, []);


  return (
    <div className="App">
      <div className="buttonsWrapper">
        <div>{cash}</div>
        <button onClick={() => handleAddCash(Number(prompt()))}>Положить средства</button>
        <button onClick={() => handleGetCash(Number(prompt()))}>Снять средства</button>
        <button onClick={() => handleAddCustomer(prompt())}>Добавить клиента</button>
        <div className='customers'>
          {
            customers.length ?
              customers.map(customer => (
                <div style={{padding: "15px", 
                  margin: "10px 0", 
                  border: "1px solid #000", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between"}} key={customer.id}>
                  <span>{customer.name}</span>
                  <button style={{marginLeft: "30px", flex: "unset"}} onClick={() => handleRemoveCustomer(customer.id)}>Удалить клиента</button>
                </div>
              ))
            :
            <div>Клиентов нет</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
