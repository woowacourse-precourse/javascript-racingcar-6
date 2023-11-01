import CONDITIONS from "../../constants/Conditions.js";

const validateTryNumber = (number) => {
  const inputNumber = number;
  return Number.isInteger(inputNumber) && inputNumber >= CONDITIONS.TRY_MINIMUM;
};

export default validateTryNumber;
