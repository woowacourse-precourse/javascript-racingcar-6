const checkCarNamesHaveBlank = (carNames) => {
  return carNames.includes('') || carNames.includes(' ') ? true : false;
};

const checkCarNameIsOverFive = (carNames) => {
  const inputHaveOverFive = carNames.find((carName) => carName.length > 5);
  return inputHaveOverFive ? true : false;
};

const checkCarNameWithBlank = (carNames) => {
  const inputWithBlank = carNames.filter((car) => car.includes(' '));
  return inputWithBlank.length !== 0 ? true : false;
};

const checkCarNamesAreDuplicated = (carNames) => {
  const carNumber = carNames.length;
  const nonDuplicatedCarNames = [...new Set(carNames)];

  return carNumber !== nonDuplicatedCarNames.length ? true : false;
};

const checkCarNamesAreValid = (userInput) => {
  const input = userInput.split(',');

  const inputHaveOverName = checkCarNameIsOverFive(input);
  const inputHaveBlank = checkCarNamesHaveBlank(input);
  const inputWithBlank = checkCarNameWithBlank(input);
  const inputsAreDuplicated = checkCarNamesAreDuplicated(input);

  if (
    inputHaveOverName ||
    inputHaveBlank ||
    inputWithBlank ||
    inputsAreDuplicated
  ) {
    throw new Error('[ERROR] 입력이 올바른 형식이 아닙니다.');
  }
  return input;
};

const checkTryNumberWithBlank = (userInput) => {
  const inputHaveBlank = userInput.includes(' ');
  return inputHaveBlank ? true : false;
};

const checkTryNumberIsCharacter = (userInput) => {
  return Number.isNaN(Number(userInput)) || Number(userInput) === 0
    ? true
    : false;
};

const checkTryNumberIsValid = (userInput) => {
  const inputHaveBlank = checkTryNumberWithBlank(userInput);
  const inputIsCharacter = checkTryNumberIsCharacter(userInput);

  if (inputHaveBlank || inputIsCharacter) {
    throw new Error('[ERROR] 입력이 올바른 형식이 아닙니다.');
  }
};

export { checkCarNamesAreValid, checkTryNumberIsValid };
