export const validateCarNames = (carNames) => {
	const carNamesRegex = new RegExp(/^([\w가-힣]{1,5},\s?)+[\w가-힣]{1,5}$/);

	if (!carNamesRegex.test(carNames))
		throw new Error("[ERROR] 자동차 이름이 잘못된 형식입니다.");
};

export const validateTryNumber = (tryNumber) => {
	const tryNumberRegex = new RegExp(/^[1-9]\d*$/);

	if (!tryNumberRegex.test(tryNumber))
		throw new Error("[ERROR] 시도할 횟수는 1 이상의 정수입니다.");
};