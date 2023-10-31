export function checkCarNames(names) {
  const name = names.split(",");
  const carNames = name.map((name) => name.trim());
  const setName = new Set(name);

  if (!names) {
    throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
  }
  if (!(carNames.length > 1 && carNames.length < 10)) {
    throw new Error("[ERROR] 자동차 이름을 2개 이상 9개 이하로 입력해주세요.");
  }
  if (carNames.length !== setName.size) {
    throw new Error("[ERROR] 중복된 이름이 있습니다.");
  }
  if (carNames.some((name) => name.length > 5)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  }
  return carNames;
}

export function checkTryCount(number) {
  const tryCount = Number(number);
  if (!number) {
    throw new Error("[ERROR] 시도할 횟수를 입력해주세요.");
  }
  if (tryCount <= 0 && tryCount > 10) {
    throw new Error("[ERROR] 시도할 회수는 1이상 10 이하여야 합니다.");
  }
  if (Number.isNaN(tryCount)) {
    throw new Error("[ERROR] 숫자를 입력해주세요.");
  }
  return tryCount;
}
