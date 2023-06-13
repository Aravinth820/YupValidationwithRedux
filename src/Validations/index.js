export default function updateFieldAndValidate(
  fieldIndex,
  value,
  fields,
  setFields,
  ImportvalidationSchema,
  name,
  CustomerFields
) {
  const updatedFields = [...fields];
  const field = { ...updatedFields[fieldIndex], value }; // Update field value
  let currentInput = name;

  ImportvalidationSchema.validateAt(name, { [name]: value })
    .then(() => {
      field.error = "";
      field.mandatory = false;
      field.cndSatisfied = true;
    })
    .catch((validationError) => {
      field.error = validationError.message;
      field.mandatory = true;
      field.cndSatisfied = false;
    })
    .finally(() => {
      updatedFields[fieldIndex] = field; // Update the corresponding field
      setFields(updatedFields);
    });

  if (value.length > 0) {
    const childField = updatedFields[fieldIndex]?.child;
    const secondChildField = updatedFields[fieldIndex]?.secondChild;
    if (childField !== undefined) {
      for (let name of childField) {
        const newone = fields.filter((field) => field.name === name);
        if (newone[0].value.length <= 0) {
          newone[0].error = `${newone[0].name} is RequiredField because the value of ${currentInput} is dependend`;
          newone[0].mandatory = true;
        }
      }
    }
    if (secondChildField !== undefined) {
      for (let name of secondChildField) {
        const secondone = CustomerFields.filter((field) => field.name === name);
        if (secondone[0].value.length === 0) {
          secondone[0].error = `${secondone[0].name} is RequiredField  because the value of ${currentInput} is dependend`;
          secondone[0].mandatory = true;
        }
      }
    }
  }
}
