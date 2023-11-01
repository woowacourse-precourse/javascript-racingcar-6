const validateNameListLength = (array, limitLength) => {
  if (array.length < limitLength) {
    throw new Error("[ERROR] 참가자는 최소 2명 이상 등록되어야 합니다.");
  }

  return true;
};

export default validateNameListLength;
