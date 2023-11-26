const MESSAGE = {
  CARNAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  NUMBER: "시도할 횟수는 몇 회인가요?",
};

const ERROR = {
  LENGTH: "[ERROR] 자동차 이름은 5글자 이상 입력해야합니다.",
  SPLIT: "[ERROR] 자동차 이름을 2대 이상 입력해주세요.(쉼표로 구분)",
  DUPLICATE: "[ERROR] 중복된 자동차 이름을 작성하면 안됩니다.",
  NUMBER: "[ERROR] 시도할 횟수는 1부터 9까지 입력이 가능합니다.",
};

export { MESSAGE, ERROR };
