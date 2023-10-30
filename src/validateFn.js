export const validateCarName = (carListArr) => {
  carListArr.forEach((carName) => {
    if (carName.length < 1 || carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 1~5자 사이로 입력해주세요.');
  });

  if (carListArr.length !== new Set(carListArr).size)
    throw new Error('[ERROR] 자동차 이름은 중복 되지않게 입력해주세요');
};

export const validateMoveNum = (moveNum) => {
  console.log(parseInt(moveNum));
  if (parseInt(moveNum).toString() !== moveNum)
    throw new Error('[ERROR] 숫자만 입력해주세요.');
  else if (parseInt(moveNum) < 1)
    throw new Error('[ERROR] 1이상의 숫자를 입력해주세요.');
};
