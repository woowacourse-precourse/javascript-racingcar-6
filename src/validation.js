const isValidCarName = (names) => {
  names.forEach((name) => {
    if (name.length > 5) {
      throw new Error("[ERROR] 5자 이하의 이름을 입력하세요.");
    }
  });
  if (names.length < 2) {
    throw new Error("[ERROR] 2대 이상의 자동차를 입력하세요.");
  }
};

const isValidAttemptCounts = (count) => {
  const attempts = Number(count);
  if (attempts < 1 || isNaN(attempts)) {
    throw new Error("[ERROR] 유효한 시도 횟수를 입력하세요.");
  }
};

export { isValidCarName, isValidAttemptCounts };
