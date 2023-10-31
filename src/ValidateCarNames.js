export const validateCarNames = (input) => {
  const CAR_NAME = input.split(",");

  if (!CAR_NAME) {
    throw new Error("[ERROR] 입력값이 비어 있습니다.");
  } else if (CAR_NAME.length < 2) {
    throw new Error("[ERROR] 입력값이 쉼표로 구분되어 있지 않습니다.");
  } else if (CAR_NAME.filter((el) => el.length > 5).length > 0) {
    throw new Error("[ERROR] 입력값의 길이가 5보다 큽니다.");
  } else if (CAR_NAME.filter((el) => !isNaN(+el)).length > 0) {
    throw new Error("[ERROR] 입력값의 형식이 잘못 되었습니다.");
  } else if (new Set(CAR_NAME).size !== CAR_NAME.length) {
    throw new Error("[ERROR] 입력값이 중복됩니다.");
  }

  return true;
};
