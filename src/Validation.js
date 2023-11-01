const Validation = {
  // 5자 이하만 가능
  overFive(carList) {
    if (carList.some((car) => car.length > 5)) {
      return true;
    }
    return false;
  },
  // 입력값이 없을 때
  noInput(carList) {
    const isEmpty = (input) => {
      if (
        input === "" ||
        input.length === 0 ||
        input === null ||
        input === "null" ||
        typeof input === "undefined"  
      ) {
        return true;
      }
      return false;
    };

    if (carList.some((empty) => isEmpty(empty))) {
      return true;
    }
    return false;
  },
  isRepeat(carList) {
    if (new Set(carList).size < carList.length) {
      return true;
    }
    return false;
  },
  // 공백체크
  isSpacing(carList) {
    if (carList.some((space) => space.includes(" ") === true)) {
      return true;
    }
    return false;
  },
  // play 횟수
  isNum(playNum) {
    if (Number.isNaN(playNum) || playNum <= 0) {
      return true;
    }
    return false;
  },
};

export default Validation;
