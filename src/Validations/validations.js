import * as yup from "yup";

let ImportID = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //contains AlphaNumberic with min of 8

export let ImportvalidationSchema = yup.object().shape({
  ImportID: yup
    .string()
    .matches(ImportID, "Must be 8 Characters with AlphaNumberic")
    .required("ImportID is Required"),
  ImporterName: yup
    .string()
    .required("Fill the Field for Accepting the Invoice"),
  ImporterAddress: yup.string().min(10).max(20).required(),
  InvoiceNumber: yup.string()
});

export let CustomervalidationSchema = yup.object().shape({
  CustomerID: yup
    .string()
    .matches(ImportID, "Must be 8 Characters with AlphaNumberic")
    .required("ImportID is Required"),
  CustomerName: yup
    .string()
    .required("Fill the Field for Accepting the Invoice"),
  CustomerAddress: yup.string().min(10).max(20).required(),
  InvoiceNumber: yup.string()
});
