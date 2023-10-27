export const nameError = (cars) => {
  cars.forEach((car) => {
    if (car.length > 5) {
      throw new Error('[ERROR] 이름의 길이가 형식과 다릅니다.');
    }
    if (car.trim().length !== car.length) {
      throw new Error('[ERROR] 입력에 공백이 있습니다.');
    }
  });
};

export const numberError = (gameAttempt) => {
  if (isNaN(Number(gameAttempt))) {
    throw new Error('[ERROR] 숫자 외에 입력이 있습니다.');
  }
  if (gameAttempt.trim().length !== gameAttempt.length) {
    throw new Error('[ERROR] 입력에 공백이 있습니다.');
  }
};
