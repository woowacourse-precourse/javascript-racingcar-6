import {ERROR_MESSAGE} from "./Constants.js";

const INPUT_CHECK = {
    check_overlap: (NAME) => {
        const SET_NAME = new Set(NAME);
        if (SET_NAME.size !== NAME.length) throw new Error(ERROR_MESSAGE.OVERLAP);
    },
    check_length: (NAME) => {
        NAME.forEach(v => {
            if (v.length > 5) throw new Error(ERROR_MESSAGE.LENGTH);
        });
    },
    check_void: (NAME) => {
        NAME.forEach(v => {
            if (v.trim().length === 0) throw new Error(ERROR_MESSAGE.VOID)
        });
    },
    check_isNAN: (SECOND_INPUT) => {
        if (isNaN(parseInt(SECOND_INPUT))) throw new Error(ERROR_MESSAGE.ISNAN);
    },
    check_int: (SECOND_INPUT) => {
        if (!Number.isInteger(parseInt(SECOND_INPUT))) throw new Error(ERROR_MESSAGE.CHECK_INT)
    },
}
export default INPUT_CHECK;