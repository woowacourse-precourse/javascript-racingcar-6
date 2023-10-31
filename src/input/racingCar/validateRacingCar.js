import CONDITIONS from "../../constants/Conditions.js";

const validateRacingCar = (array) => {
  const input_array = [...array];
  for (let i = 0; i < input_array.length; i++) {
    if (
      input_array[i].includes(" ") ||
      input_array[i].length < CONDITIONS.MINIMUM_CAR_NAME ||
      input_array[i].length > CONDITIONS.MAXIMUM_CAR_NAME
    ) {
      return false;
    }
  }
  return true;
};

export default validateRacingCar;
