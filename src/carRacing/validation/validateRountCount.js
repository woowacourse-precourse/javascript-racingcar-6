const validateRoundCount = (roundCount) => {
  if (isNaN(Number(roundCount))) {
    throw new Error(`[ERROR] 숫자 이외의 값이 입력되었습니다.`);
  }

  if (roundCount === " ") {
    throw new Error("[ERROR] 입력에 공백이 포함되었습니다.");
  }

  return true;
};

export default validateRoundCount;
