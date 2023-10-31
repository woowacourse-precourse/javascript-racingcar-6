function isNumber(raceNumber) {
  return !Number.isNaN(raceNumber);
}

function isNaturalNumber(raceNumber) {
  return Number.isInteger(raceNumber);
}

function isValidRaceNumber(raceNumber) {
  if (!isNumber(raceNumber)) throw new Error('[ERROR] 숫자를 입력해주세요');
  if (!isNaturalNumber(raceNumber)) throw new Error('[ERROR] 자연수를 입력해주세요');
  return true;
}

export default isValidRaceNumber;
