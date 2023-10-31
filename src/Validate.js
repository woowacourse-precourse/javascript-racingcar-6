const INPUT_CHECK = {
    check_overlap: (NAME) => {
        const SET_NAME = new Set(NAME);
        if (SET_NAME.size !== NAME.length) throw new Error("[ERROR] 중복된 이름을 입력");
    },
    check_length: (NAME) => {
        NAME.forEach(v => {
            if (v.length > 5) throw new Error("[ERROR] 이름 숫자는 5이하만 가능합니다.")
        })
    },
    check_void: (NAME) => {
        NAME.forEach(v => {
            if (v.trim().length === 0) throw new Error("[ERROR] 공백만 입력 금지")
        });
    },
    check_isNAN: (SECOND_INPUT) => {
        if (isNaN(parseInt(SECOND_INPUT))) throw new Error("[ERROR] 숫자만 입력해주세요");
    },
    check_int: (SECOND_INPUT) => {
        if (!Number.isInteger(parseInt(SECOND_INPUT))) throw new Error("[ERROR] 정수만 입력해주세요")
    },
}
export default INPUT_CHECK;