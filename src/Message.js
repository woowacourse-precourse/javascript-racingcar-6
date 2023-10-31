const MESSAGE = {
    GETCARNAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    GETPLAYCOUNT: '시도할 횟수는 몇 회인가요?\n',
    RESULT: '\n실행 결과'
}

const ERROR_MESSAGE = {
    NOCARNAMES_ERROR: '[ERROR] 자동차 이름을 입력하지 않았습니다.',
    VALIDATECARNAME_ERROR: '[ERROR] 이름은 5글자 이하로만 입력할 수 있습니다.',
    VALIDATEPLAYCOUNT_ERROR: '[ERROR] 값이 잘 못 입력되었습니다.'
}

export { MESSAGE, ERROR_MESSAGE };
