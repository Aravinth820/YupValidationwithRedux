import { Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "../Inputs/TextField";
import { CustomervalidationSchema } from "../Validations/validations";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import JobDetails from "../WebApp/JobDetails";
import updateFieldsAndValidate from "../Validations/index";

export default function AppRendering(props) {
  const { InitialFields, invoiceDetails, handleNextData, jobDetails } = props;

  const [fields, setFields] = React.useState(InitialFields);
  const [CustomerDetails, setCustomerDetails] = React.useState({
    CustomerID: "",
    CustomerName: "",
    CustomerAddress: "",
    InvoiceNumber: ""
  });
  React.useEffect(() => {
    if (jobDetails !== undefined) {
      setCustomerDetails(jobDetails);
    }
  }, [jobDetails]);

  let jobsSave = {};

  const handleChange = (event) => {
    const { value, name } = event.target;
    const fieldIndex = fields.findIndex((field) => field.name === name);

    if (fieldIndex !== -1) {
      updateFieldsAndValidate(
        fieldIndex,
        value,
        fields,
        setFields,
        CustomervalidationSchema,
        name
      );
      // const updatedFields = [...fields];
      // const field = { ...updatedFields[fieldIndex], value }; // Update field value

      // CustomervalidationSchema.validateAt(name, { [name]: value })
      //   .then(() => {
      //     field.error = "";
      //     field.mandatory = false;
      //   })
      //   .catch((validationError) => {
      //     field.error = validationError.message;
      //     field.mandatory = true;
      //   })
      //   .finally(() => {
      //     updatedFields[fieldIndex] = field; // Update the corresponding field
      //     setFields(updatedFields);
      //   });

      // if (value.length > 0) {
      //   const newField = updatedFields[fieldIndex]?.child;
      //   if (newField !== undefined) {
      //     for (let name of newField) {
      //       const newone = fields.filter((field) => field.name === name);
      //       if (newone[0].value.length <= 0) {
      //         newone[0].error = `${newone[0].name} is RequiredField`;
      //         newone[0].mandatory = true;
      //       }
      //       newone[0].error = "";
      //       newone[0].mandatory = false;
      //     }
      //   }
      // }
      handleSave(name, value);
    }
  };
  const handleSave = (name, value) => {
    let Data = CustomerDetails;
    Data[name] = value;
    // console.log(brokerDetails)
  };
  const handleNext = () => {
    jobsSave["CustomerDetails"] = { ...CustomerDetails };
    handleNextData(jobsSave);

    //   console.log(ImportSave)
  };

  return (
    <div>
      {/* <Button>
        <Link to="/">imports</Link>
      </Button> */}
      {fields.map((field) => (
        <div key={field.name}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8} sm={3}>
              <Typography>{field.name} : </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                placeholder={field.name}
                variant={"standard"}
                name={field.name}
                value={CustomerDetails ? CustomerDetails[field.name] : ""}
                handleChange={handleChange}
                error={
                  CustomerDetails[field.name] !== "" && field.cndSatisfied
                    ? false
                    : field.error
                }
                mandatory={
                  CustomerDetails[field.name] !== "" && field.cndSatisfied
                    ? false
                    : field.mandatory
                }
                label={field.label}
                errorLabel={field.errorLabel}
              />
            </Grid>
          </Grid>
          <br />
        </div>
      ))}
      <Button onClick={handleNext}>Save</Button>
    </div>
  );
}
