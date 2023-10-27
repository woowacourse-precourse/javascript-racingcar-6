export function validateCarNameLength(name) {
	if (name.length > 5) {
		throw new Error('[ERROR] 특정 자동차의 이름이 5자를 초과하였습니다.');
	}
}

function validatePlayCount() {}

export function validateRandomNum(num) {
	if (typeof num !== 'number') {
		throw new Error(
			'[ERROR] 차의 전진 유무를 판단하는 무작위 값이 숫자가 아닙니다.'
		);
	}
	if (num < 0 || num > 9) {
		throw new Error(
			'[ERROR] 차의 전진 유무를 판단하는 무작위 값이 0보다 작거나 9보다 큽니다.'
		);
	}
}

export function validateForMove(num) {
	return num >= 4;
}
