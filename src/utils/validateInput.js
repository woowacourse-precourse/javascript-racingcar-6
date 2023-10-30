const validName = name => name.length > 0 && name.length <= 5;
const validNameList = nameList => nameList.length > 1;
const validNumber = input => {
  const inputNum = Number(input);
  return String(inputNum) === input && input > 0;
};
const validtryCount = tryCount => {
  if (!validNumber(tryCount))
    throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
};

const validCarName = names => {
  const validCarNames = names.replace(/(\s*)/g, '').split(',');
  const carNameArray = validCarNames.every(validName);
  if (!validNameList(carNameArray))
    throw new Error(
      '[ERROR] 자동차 이름은 쉼표(,)로 구분하여 입력해야 합니다.',
    );
  if (!carNameArray)
    throw new Error(
      '[ERROR] 자동차 이름은 1글자 이상 5글자 이하만 가능합니다.',
    );
};

export { validName, validNameList, validNumber, validtryCount, validCarName };
