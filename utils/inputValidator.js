export const validateCarName = (carName) => {
  const regex = new RegExp(/^(\w{1,5},)+\w{1,5}$/);

  if (!regex.test(carName))
    throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
};

export const validateTryNumber = (tryNumber) => {
  const regex = new RegExp(/^[1-9]\d*$/); // 1 이상의 정수

  if (!regex.test(tryNumber))
    throw new Error("[ERROR] 시도할 횟수는 1 이상의 정수입니다.");
};