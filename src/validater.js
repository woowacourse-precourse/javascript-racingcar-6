export const validateCarNumber = (carNames) => {
  if (carNames.split(",").length < 2) {
    return true;
  }
  return false;
};
