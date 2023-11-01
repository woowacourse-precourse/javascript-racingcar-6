const INPUT_MESSAGE = {
    FIRST_Q: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    SECOND_Q: "시도할 횟수는 몇 회인가요?\n",
};

const ERROR_MESSAGE = {
    OVERLAP: "[ERROR] 중복된 이름을 입력",
    LENGTH: "[ERROR] 이름 숫자는 5이하만 가능합니다.",
    VOID: "[ERROR] 공백만 입력 금지",
    ISNAN: "[ERROR] 숫자만 입력해주세요",
    CHECK_INT: "[ERROR] 정수만 입력해주세요",
};

const RESULT_MESSAGE = {
    RESULT_OUT: "\n실행 결과",
    FORWARD_MARK: "-",
}
export {INPUT_MESSAGE,ERROR_MESSAGE,RESULT_MESSAGE}