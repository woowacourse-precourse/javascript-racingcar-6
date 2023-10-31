export const validateTrialNumbers = (input) => {
  if (input === 0) {
    throw new Error("[ERROR] 입력값은 0보다 커야 합니다.");
  } else if (isNaN(input)) {
    throw new Error("[ERROR] 입력값의 형식이 잘못 되었습니다.");
  }
  return true;
};
