import { isEmpty, validateCarName } from '../Errors/InputErrors';

const validateUserInput = (carName) => {
  const validatorsUserInput = [isEmpty, validateCarName];
  let error = null;

  validatorsUserInput.some((validator) => {
    error = validator(carName);
    return error !== null;
  });
  if (error !== null) {
    throw new Error(error);
  }
};
export default validateUserInput;
