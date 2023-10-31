import Messages from '../messages/Car.js';

const carValidate = (cars) => {
  // 차 중복 체크
  const carSet = new Set(cars);
  if (carSet.size !== cars.length) {
    throw new Error(Messages.ERROR_DUPLICATE);
  }
  // 차 이름 길이 체크
  cars.forEach((element) => {
    if (element.length > 5) {
      throw new Error(Messages.ERROR_FIVE_CHARACTERS);
    }

    if (element.trim() === '') {
      throw new Error(Messages.ERROR_BLANK_NAME);
    }
  });
};

export default carValidate;
