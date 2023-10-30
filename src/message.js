const MSG = Object.freeze({
    GAMESTART: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    INPUTCOUNT: "시도할 횟수는 몇 회인가요?\n",
    RESULT: "\n실행 결과",
    WINNER: "최종 우승자 :"

});

const ERRMSG = Object.freeze({
    DUPLICATION: "[ERROR] 자동차의 이름을 중복되지 않게 입력해주세요.",
    NOT_ENOUGH: "[ERROR] 최소한 두개 이상의 이름을 입력해주세요.",
    LENGTH: "[ERROR] 1 ~ 5글자의 자동차 이름을 입력해주세요.",
    CAR_EMPTY: "[ERROR] 공백을 제외한 자동차의 이름을 입력해주세요.",
    STRING: "[ERROR] 횟수는 숫자만 입력해주세요.",
    COUNT_EMPTY: "[ERROR 올바른 숫자를 입력해주세요."
});

export {MSG, ERRMSG};