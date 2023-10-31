const checkLength = (name) => {
  if (name.length > 5) {
    throw new Error("[ERROR]");
  }

  return;
};

const checkSeparator = (inpuut) => {
  if (inpuut.includes(",")) {
    return true;
  }

  return false;
};

const checkIsNumber = (number) => {
  if (isNaN(number)) {
    throw new Error("[ERROR] 잘못된 숫자형식입니다.");
  }

  return;
};

export { checkLength, checkSeparator, checkIsNumber };
