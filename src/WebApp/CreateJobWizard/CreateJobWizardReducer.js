import { combineReducers } from "redux";

export const CreateJobWizardActions = {
  SINGLE_INVOICE_DETAILS_ADDED: "SINGLE_INVOICE_DETAILS_ADDED",
  SINGLE_JOB_DETAILS_ADDED: "SINGLE_JOB_DETAILS_ADDED"
};

export default function createJobWizardReducer(state = {}, action) {
  switch (action.type) {
    case CreateJobWizardActions.SINGLE_INVOICE_DETAILS_ADDED:
      return { ...state, invoiceDetails: action.response };
    case CreateJobWizardActions.SINGLE_JOB_DETAILS_ADDED:
      return { ...state, JobDetails: action.response };

    default:
      return state;
  }
}
