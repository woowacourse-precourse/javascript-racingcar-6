const validation = (carNames) => {
  // 배열로 들어왔는지 확인
  if (!Array.isArray(carNames)) return false;

  // 자동차가 있는지 확인
  if (carNames.length === 0) return false;

  //각 자동차의 이름이 5초과인지 확인
  for (const carName of carNames) {
    if (carName.length > 5) return false;
  }

  //자동차 이름에 중복이 있는지 확인
  if (carNames.length !== new Set(carNames).size) return false;

  return true;
};

export default validation;
