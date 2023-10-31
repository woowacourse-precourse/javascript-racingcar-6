const nameValidation = (carNames) => {
  carNames.forEach((name) => {
    if (name.length > 5 || name.length === 0) throw new Error("[ERROR]");
  });
};

const naturalNumberRex = (str) => {
  const reg = /([0-9])/;
  if (!reg.test(str) || str < 0) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
  }
};

const duplicateChecks = (arr) => {
  const set = new Set([...arr]);
  if (set.size !== arr.length) throw new Error("[ERROR] 중복된 이름입니다.");
};

export { nameValidation, naturalNumberRex, duplicateChecks };
