export const ERROR = {
  INVALID_NAME_LENGTH: "[ERROR]이름은 5자 이내여야 합니다.",
  HAVE_SAME_NAME: "[ERROR]중복되는 이름이 있습니다.",
  INVALID_COUNT_RANGE: "[ERROR]1이상의 정수를 입력해 주세요.",
  TOO_MANY_NAMES: (max) => {
    return `[ERROR]${max}개 이하로 입력해주세요.`;
  },
  TOO_FEW_NAME: (min) => {
    return `[ERROR]${min}개 이상으로 입력해주세요.`;
  },
  TOO_MANY_COUNT: (max) => {
    return `[ERROR]${max}이하의 수를 입력해주세요.`;
  },
};
