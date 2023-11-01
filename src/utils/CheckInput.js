import { MAX_LENGTH } from './Constants';

export const checkLength = (input) => {
	if (input.length > MAX_LENGTH) {
		throw new Error(`[ERROR] 이름은 ${MAX_LENGTH}이하로 작성가능합니다.`);
	}
};

export const checkTryCount = (input) => {
	if (isNaN(parseInt(input))) {
		throw new Error(`[ERROR] 시도 횟수는 숫자만 입력가능합니다.`);
	}
};
