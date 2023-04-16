import { createStore, combineReducers } from "redux"
import cashReducer from "./cashReducer"
import customerReducer from "./customerReducer"

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
})

const store = createStore(rootReducer)

export default store
