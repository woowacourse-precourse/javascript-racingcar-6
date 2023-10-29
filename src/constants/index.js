/**
 * 고정적으로 사용될 문자열
 */
const MESSAGES = Object.freeze({
    QUEST_CAR_NAME : "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    QUEST_TRY_COUNT : "시도할 횟수는 몇 회인가요?\n",
    PROGRESS_RESULT: "실행 결과",
    WINNER : "최종 우승자 : ",
});

/**
 * 에러에 사용될 문자열
 */
const ERRORS = Object.freeze({
    FRONT: "[ERROR]",
    NAME: "자동차 이릉의 길이는 5글자를 넘을 수 없습니다.",
    TRY: "전진 시도 회수는 자연수로 이루어져야합니다.",
    DUPLICATION: "자동차 이름은 중복하여 입력할 수 없습니다.",
    ONLYONE: "출전하는 자동차는 2대 이상이어야 합니다.",
    BLANK: "자동차의 이름은 공백으로만 작성할 수 없습니다.",
})

const RULES = Object.freeze({
    // 4미만: 정지, 4이상: 전진
    STANDARD: 4,
    FORWARD: "-",
    MIN_MOVE: 0,
    MAX_MOVE: 9,
    MAX_STRING: 5,
})


export{
    MESSAGES,
    ERRORS,
    RULES,
}
