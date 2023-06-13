import { accordionActionsClasses, Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "../Inputs/TextField";
import { ImportvalidationSchema } from "../Validations/validations";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import updateFieldsAndValidate from "../Validations/index";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "blue",
    position: "relative",
    zIndex: 9
    //bottom:"10rem"
  }
}));

export default function AppRendering(props) {
  const classes = useStyles();
  const {
    ImportFields,
    CustomerFields,
    handleNextData,
    invoiceDetails
  } = props;
  let ImportSave = {};

  const [fields, setFields] = React.useState(ImportFields);
  const [data, setData] = React.useState({});
  const [AddOpen, setAddOpen] = React.useState(false);
  const [brokerDetails, setBrokerDetails] = React.useState({
    ImportID: "",
    ImporterName: "",
    ImporterAddress: "",
    InvoiceNumber: ""
  });
  React.useEffect(() => {
    if (invoiceDetails !== undefined) {
      setBrokerDetails(invoiceDetails);
    }
  }, [invoiceDetails]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    const fieldIndex = fields.findIndex((field) => field.name === name);

    if (fieldIndex !== -1) {
      updateFieldsAndValidate(
        fieldIndex,
        value,
        fields,
        setFields,
        ImportvalidationSchema,
        name,
        CustomerFields
      );
      // const updatedFields = [...fields];
      // const field = { ...updatedFields[fieldIndex], value }; // Update field value

      // ImportvalidationSchema.validateAt(name, { [name]: value })
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
      //   const childField = updatedFields[fieldIndex]?.child;
      //   const secondChildField = updatedFields[fieldIndex]?.secondChild;
      //   console.log(secondChildField, "secondChildField");
      //   if (childField !== undefined) {
      //     for (let name of childField) {
      //       const newone = fields.filter((field) => field.name === name);
      //       if (newone[0].value.length <= 0) {
      //         newone[0].error = `${newone[0].name} is RequiredField`;
      //         newone[0].mandatory = true;
      //       }
      //       newone[0].error = "";
      //       newone[0].mandatory = false;
      //     }
      //   }
      //   if (secondChildField !== undefined) {
      //     for (let name of secondChildField) {
      //       const secondone = CustomerFields.filter(
      //         (field) => field.name === name
      //       );
      //       if (secondone[0].value.length <= 0) {
      //         secondone[0].error = `${secondone[0].name} is RequiredField`;
      //         secondone[0].mandatory = true;
      //       }
      //     }
      //   }
      // }
      handleSave(name, value);
    }
  };
  const handleSave = (name, value) => {
    let Data = brokerDetails;
    Data[name] = value;
    // console.log(brokerDetails)
  };
  const handleNext = () => {
    ImportSave["ImportDetails"] = { ...brokerDetails };
    handleNextData(ImportSave);

    //   console.log(ImportSave)
  };
  const handleAddDetails = () => {
    setAddOpen(true);
  };
  return (
    <div>
      <Button onClick={handleAddDetails}>Add Details</Button>

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
                value={brokerDetails ? brokerDetails[field.name] : ""}
                handleChange={handleChange}
                error={
                  brokerDetails[field.name] !== "" && field.cndSatisfied
                    ? false
                    : field.error
                }
                mandatory={
                  brokerDetails[field.name] !== "" && field.cndSatisfied
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
