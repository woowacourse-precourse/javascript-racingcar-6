export function validityCheckCarName(NAME_CAR) {
  if (NAME_CAR.length !== new Set(NAME_CAR).size) {
    throw new Error("[ERROR] 중복된 차량 이름입니다");
  }
  for (let i = 0; i < NAME_CAR.length; i++) {
    if (NAME_CAR[i].length > 5) {
      throw new Error("[ERROR] 차량 이름이 5자를 초과합니다");
    }
    let BLANK_PATTERN = /^\s+|\s+$/g;
    if (NAME_CAR[i].replace(BLANK_PATTERN, "") == "") {
      throw new Error("[ERROR] 공백으로만 이루어진 차량 이름이 있습니다");
    }
    BLANK_PATTERN = /[\s]/g;
    if (BLANK_PATTERN.test(NAME_CAR[i])) {
      throw new Error("[ERROR] 공백이 포함된 차량 이름이 있습니다");
    }
  }
}

export function validityCheckIteration(ITERATION_RACE) {
  if (isNaN(ITERATION_RACE)) {
    throw new Error("[ERROR] 입력된 시도 횟수가 숫자가 아닙니다");
  }
}