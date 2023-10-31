function validateCarName(carName) {
  if (carName.length > 5) return false;
  else return true;
}

function validateNumber(number) {
  if (isNaN(number)) return false;
  else return true;
}

export { validateCarName, validateNumber };
