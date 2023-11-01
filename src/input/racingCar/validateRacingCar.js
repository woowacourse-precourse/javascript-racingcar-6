import CONDITIONS from "../../constants/Conditions.js";

const validateRacingCar = (array) => {
  const inputArray = [...array];
  for (let i = 0; i < inputArray.length; i += 1) {
    if (
      inputArray[i].includes(" ") ||
      inputArray[i].length < CONDITIONS.MINIMUM_CAR_NAME ||
      inputArray[i].length > CONDITIONS.MAXIMUM_CAR_NAME
    ) {
      return false;
    }
  }
  return true;
};

export default validateRacingCar;
