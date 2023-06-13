const ImportFields = [
  {
    name: "ImportID",
    value: "",
    error: "Import Field is Mandatory",
    mandatory: true,
    child: ["ImporterName", "ImporterAddress"],
    type: "textField",
    secondChild: ["CustomerName"],
    cndSatisfied: true
  },
  {
    name: "ImporterName",
    value: "",
    error: false,
    mandatory: false,
    type: "textField",
    cndSatisfied: true
  },
  {
    name: "ImporterAddress",
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

export const InvoiceDetails = { ImportFields };
