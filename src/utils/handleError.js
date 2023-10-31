const handleError = (validate, input) => {
  try {
    validate(input);
  } catch (error) {
    throw new Error(error);
  }
};

export default handleError;
