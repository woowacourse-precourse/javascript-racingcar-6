const MESSAGE = {
    START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    ATTEMPT: "시도할 횟수는 몇 회인가요?\n",
    RESULT_TITLE: "\n실행 결과",
    RESULT: "최종 우승자 : "
};

const ERROR = {
    CAR_NAME: "[ERROR] 자동차 이름은 공백없이 쉼표(,)로 구분하며 한글 또는 알파벳으로 이루어진 이름만 가능합니다. 다시 입력하세요.",
    ATTEMPT: "[ERROR] 시도 가능한 횟수는 1~10 사이의 자연수만 가능합니다. 다시 입력하세요."
};

module.exports = {MESSAGE,ERROR};