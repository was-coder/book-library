const clearFormValues = (inputs) => {
  inputs.forEach((input) => {
    if (input.name) {
      input.value = '';
    }
  });
};

export default clearFormValues;
