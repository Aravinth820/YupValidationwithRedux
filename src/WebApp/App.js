import React, { Component } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Imports from "./ImportDetails/index";
import Jobs from "./JobDetails/index";
import { connect } from "react-redux";
import { CreateJobWizardActions } from "./CreateJobWizard/CreateJobWizardReducer";

class LabTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "1",
      invoiceDetails: {}
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value } = this.state;

    return (
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={this.handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Imports invoiceDetails={this.props?.InvoiceData?.invoiceDetails} />
          </TabPanel>
          <TabPanel value="2">
            <Jobs />
          </TabPanel>
        </TabContext>
      </Box>
    );
  }
}
const mapStateToProps = ({ InvoiceData }) => {
  return { ...InvoiceData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    savingSingleJobData: (response) =>
      dispatch({
        type: CreateJobWizardActions.SINGLE_JOB_DETAILS_ADDED,
        response: response
      }),
    savingSingleInvoiceData: (response) =>
      dispatch({
        type: CreateJobWizardActions.SINGLE_INVOICE_DETAILS_ADDED,
        response: response
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LabTabs);
