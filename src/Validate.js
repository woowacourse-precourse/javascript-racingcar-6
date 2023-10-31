export function checkCarNameDuplicate(carNameArray) {
  const carNameSet = new Set();
  carNameArray.forEach((carName) => carNameSet.add(carName));
  return carNameSet.size === carNameArray.length;
}

export function checkCarNameLength(carNameArray) {
  return carNameArray.every(
    (carName) => carName.length <= 5 && carName.length > 0
  );
}

export function checkInputRaceNumber(inputRaceNumber) {
  const numberValue = Number(inputRaceNumber);
  return !Number.isNaN(numberValue) && numberValue > 0;
}
