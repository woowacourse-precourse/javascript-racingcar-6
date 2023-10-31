export const READ_LINE_QUERY = Object.freeze({
	namesOfCars:
		"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
	numberOfAttempts: "시도할 횟수는 몇 회인가요?\n",
});

export const PRINT = Object.freeze({
	result: "\n실행 결과",
	winners: "최종 우승자",
	winnersSeparate: ", ",
	movingDistance: "-",
	empty: "",
});

export const ERROR_MESSAGE = Object.freeze({
	lengthOfNameOverFive: "[ERROR] 이름은 5자 이하만 가능합니다.",
	existDuplicateName: "[ERROR] 중복된 이름이 존재합니다.",
	onlyNaturalNumber: "[ERROR] 자연수만 가능합니다.",
});
