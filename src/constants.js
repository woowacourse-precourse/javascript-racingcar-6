const INPUT = {
    CAR: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
    ATTEMPTS: "시도할 횟수는 몇 회인가요?",
};

const OUTPUT = {
    RESULT_TITLE: "실행 결과",
    RESULT: (car, location) => `${car} : ${location}`,
    LINE: "\n",
};

const ERROR = {
    CARS_NAME: "[ERROR] 자동차 이름이 잘못된 형식입니다.",
    ATTEMPTS_NUMBER: "[ERROR] 숫자가 잘못된 형식입니다.",
};

const RANDOM = {
    MIN: 0,
    MAX: 9,
};

const GAME = {
    GO: 4,
    STOP: 3,
    POSITION: '-',
};

export {
    INPUT,
    OUTPUT,
    ERROR,
    RANDOM,
    GAME
}
