const processTrialError = (TRIALS) => {
  if (
    typeof TRIALS !== "number" &&
    (isNaN(parseFloat(TRIALS)) || parseFloat(TRIALS).toString() !== TRIALS)
  ) {
    throw new Error("[ERROR] 시도 횟수 입력은 숫자만 가능합니다.");
  }
};

export default processTrialError;
