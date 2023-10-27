function validateForMove() {}

export function validateCarNameLength(name) {
	if (name.length > 5) {
		throw new Error('[ERROR] 특정 자동차의 이름이 5자를 초과하였습니다.');
	}
}

function validatePlayCount() {}
