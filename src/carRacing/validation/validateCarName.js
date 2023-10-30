const validateCarName = (carName, limitLength) => {
  if (carName.length > limitLength) {
    throw new Error(`[ERROR] 참가자의 이름이 5자를 초과했습니다.`);
  }

  if (carName === "") {
    throw new Error(`[ERROR] 참가자의 이름이 공백으로 입력됐습니다.`);
  }

  return true;
};

export default validateCarName;
