const getID = () => {
  const id = new Date().getTime().toString(36);
  return id;
};

const getFormValues = (inputs) => {
  const inputValues = { id: getID() };
  inputs.forEach((input) => {
    inputValues[input.name] = input.value;
  });
  return inputValues;
};

export default getFormValues;
