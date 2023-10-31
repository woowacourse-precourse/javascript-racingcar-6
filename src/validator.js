export const validateCarNumber = (carArray) => {
  if (carArray.length < 2) {
    throw new Error("[ERROR] 자동차 2대 이상부터 경주를 할 수 있습니다.");
  }
  return true;
};

export const validateCarName = (carArray) => {
  if (carArray.find((carName) => carName.length >= 5)) {
    throw new Error(
      "[ERROR] 자동차의 이름은 쉼표(,)로 구분하며 5자 이하만 가능합니다."
    );
  }
  carArray.forEach((carName) => {
    if (carName === "") {
      throw new Error(
        "[ERROR] 자동차의 이름은 쉼표(,)로 구분하며 5자 이하만 가능합니다."
      );
    }
  });
  return true;
};
