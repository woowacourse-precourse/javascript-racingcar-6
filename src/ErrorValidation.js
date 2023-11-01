export const checkCarName = (CAR_NAME) => {
  if (CAR_NAME.length !== new Set(CAR_NAME).size) {
    throw new Error("[ERROR]");
  }
  for (let i = 0; i < CAR_NAME.length; i++) {
    if (CAR_NAME[i].length > 5) {
      throw new Error("[ERROR]");
    }
    let BLANK_PATTERN = /^\s+|\s+$/g;
    if (CAR_NAME[i].replace(BLANK_PATTERN, "") == "") {
      throw new Error("[ERROR]");
    }
    BLANK_PATTERN = /[\s]/g;
    if (BLANK_PATTERN.test(CAR_NAME[i])) {
      throw new Error("[ERROR]");
    }
  }
};

export const checkNumber = (MOVING_NUMBER) => {
  if (isNaN(MOVING_NUMBER)) {
    throw new Error("[ERROR]");
  }
};
