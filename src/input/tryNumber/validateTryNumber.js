import CONDITIONS from "../../constants/Conditions";

const validateTryNumber = (number) => {
  const input_number = number;
  return Number.isInteger(input_number) &&
    input_number >= CONDITIONS.TRY_MINIMUM
    ? true
    : false;
};

export default validateTryNumber;
