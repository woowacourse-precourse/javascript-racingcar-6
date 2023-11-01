const validateCarName = (carNames) => {
  if (!Array.isArray(carNames)) return false;

  if (carNames.length === 0) return false;

  for (const carName of carNames) {
    if (carName.length > 5) return false;
  }

  if (carNames.length !== new Set(carNames).size) return false;

  return true;
};

export default validateCarName;
