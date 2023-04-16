import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      id: nanoid(),
      name,
    }
    dispatch({ type: "ADD_CUSTOMER", payload: customer })
  }

  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id })
  }

  return (
    <div className="grid justify-center content-center items-center grid-cols-[200px_200px] grid-rows-[100px_100px] gap-2 h-full w-full fixed">
      <div className="col-span-2 text-4xl m-auto">{cash}</div>
      <button
        className="w-48 h-20 bg-cyan-500 border-2 border-solid text-white rounded-lg"
        onClick={() => addCash(Number(prompt()))}
      >
        Add cash
      </button>
      <button
        className="w-48 h-20 bg-cyan-500 border-2 border-solid text-white rounded-lg"
        onClick={() => getCash(Number(prompt()))}
      >
        Get cash
      </button>
      <button
        className="w-48 h-20 bg-cyan-500 border-2 border-solid text-white rounded-lg"
        onClick={() => addCustomer(prompt())}
      >
        Add customer
      </button>
      <button
        className="w-48 h-20 bg-cyan-500 border-2 border-solid text-white rounded-lg"
        onClick={() => getCash(Number(prompt()))}
      >
        Delete customer
      </button>
      {customers.length > 0 ? (
        <div className="text-4xl mt-4 col-span-2 m-auto">
          {customers.map((customer) => (
            <div key={nanoid()} onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div className="text-4xl mt-4 col-span-2 m-auto">No customers</div>
      )}
    </div>
  );
}

export default App;
