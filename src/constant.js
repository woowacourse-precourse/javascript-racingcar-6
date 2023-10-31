const INFO_MESSAGES = Object.freeze({
    CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    NUM_OF_TRY: '시도할 횟수는 몇 회인가요?',
    RACE_RESULT: '실행 결과', 
    WINNER: '최종 우승자 :',
});

const ERROR_MESSAGES = Object.freeze({
    NUM_OF_CHARACTER_EXCEED: '[ERROR] 자동차 이름은 5자 이하로 입력해주세요.',
    DUPLICATE_NAME: '[ERROR] 서로 다른 자동차 이름을 입력해주세요.',
    OUT_OF_RANGE: '[ERROR] 시도 횟수는 양의 정수로 입력해주세요.'
});

export { INFO_MESSAGES, ERROR_MESSAGES };