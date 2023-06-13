import {
  applyMiddleware,
  createStore as reduxCreateStore,
  combineReducers
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createJobWizard from "./CreateJobWizardReducer";
const reducer = combineReducers({
  InvoiceData: createJobWizard
});

const createStore = () =>
  reduxCreateStore(reducer, applyMiddleware(logger, thunk));
export default createStore;
