export const validateCarName = (carName) => {
  const regex = new RegExp(/^(\w{1,5},)+\w{1,5}$/);

  if (!regex.test(carName))
    throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
};