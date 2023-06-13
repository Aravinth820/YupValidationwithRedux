import React, { Component } from "react";
import ImportDetailsUI from "../../Components/ImporterDetails";
import { InvoiceDetails } from "../../SectionFields/ImportDetails";
import { CustomerFields } from "../../SectionFields/CustomerDetails";
import { connect } from "react-redux";
import { CreateJobWizardActions } from "../CreateJobWizard/CreateJobWizardReducer";

class Imports extends Component {
  handleNextData = (data) => {
    let documentData = {
      ...data
    };
    this.props.savingSingleInvoiceData(documentData);
  };
  render() {
    return (
      <div>
        <ImportDetailsUI
          ImportFields={InvoiceDetails.ImportFields}
          handleNextData={this.handleNextData}
          invoiceDetails={this.props.InvoiceData?.invoiceDetails?.ImportDetails}
          CustomerFields={CustomerFields}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ InvoiceData }) => {
  return { InvoiceData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    savingSingleInvoiceData: (response) =>
      dispatch({
        type: CreateJobWizardActions.SINGLE_INVOICE_DETAILS_ADDED,
        response: response
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Imports);
