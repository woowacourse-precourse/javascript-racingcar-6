const REGEX_NUM = Object.freeze(/^[0-9]+$/);
const REGEX_ALPHABET = Object.freeze(/^[a-z]+$/);

const validate ={
	isNumber(input) {
		if (input.match(REGEX_NUM) === null) {
			throw new Error('[ERROR] 입력값은 3가지 숫자여야 합니다.');
		}
	},

	isAlphabet(input) {
		if (input.match(REGEX_ALPHABET) === null) {
			throw new Error('[ERROR] 입력값은 알파벳이어야만 합니다.');
		}
	},

	sizeCheck(size, input, message) {
		if (input.length !== size) {
				throw new Error(`[ERROR] 입력값은 ${size}개여야 합니다.`);
		}
	},

	lessThan(size, input, message) {
		if (input.length > size) {
			if (message) {
				throw new Error(message);
			} else {
				throw new Error(`[ERROR] 입력값은 ${size}자 이하여야 합니다.`);
			}
		}
	},
	
	isDuplicatedNumber(input) {
		const numsSet = new Set(input);
		if (input.length !== numsSet.size) {
			throw new Error('[ERROR] 입력값은 중복된 숫자가 올 수 없습니다.');
		}
	},

}


export default validate;