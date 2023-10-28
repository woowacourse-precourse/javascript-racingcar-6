const isValidCarName = (carNames) => {
  const names = carNames.split(",");
  const carNameSet = new Set(names);
  if ( carNameSet.size !== names.length || names.some((name) => name.length > 5)) {
    return false;
  }
  return true;
};

const isValidAttempts = (number) => {
    if(isNaN(Number(number)) || number <= 0) {
        return false;
    }
    return true;
};

export { isValidCarName, isValidAttempts };