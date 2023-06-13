export const CustomerFields = [
  {
    name: "CustomerID",
    value: "",
    error: false,
    mandatory: false,
    child: ["InvoiceNumber"],
    type: "textField",
    cndSatisfied: true
  },
  {
    name: "CustomerName",
    value: "",
    error: false,
    mandatory: false,
    type: "textField",
    //   secondChild: ["ImportID"],
    cndSatisfied: true
  },
  {
    name: "CustomerAddress",
    value: "",
    error: false,
    mandatory: false,
    type: "textField",
    cndSatisfied: true
  },
  {
    name: "InvoiceNumber",
    value: "",
    error: false,
    mandatory: false,
    type: "DropDown",
    cndSatisfied: true
  }
];
