import React, { Component } from "react";
import JobDetailsUI from "../../Components/CustomerDetails";
import { CustomerFields } from "../../SectionFields/CustomerDetails";
import { connect } from "react-redux";
import { CreateJobWizardActions } from "../CreateJobWizard/CreateJobWizardReducer";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InitialFields: []
    };
  }

  handleNextData = (data) => {
    let documentData = {
      ...data
    };
    this.props.savingSingleJobData(documentData);
  };
  render() {
    return (
      <div>
        <JobDetailsUI
          InitialFields={CustomerFields}
          handleNextData={this.handleNextData}
          jobDetails={this.props.InvoiceData?.JobDetails?.CustomerDetails}
          invoiceDetails={this.props.InvoiceData}
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
    savingSingleJobData: (response) =>
      dispatch({
        type: CreateJobWizardActions.SINGLE_JOB_DETAILS_ADDED,
        response: response
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
