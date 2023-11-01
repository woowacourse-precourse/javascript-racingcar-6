"use strict";

export const CAR = Object.freeze({
	nameMaxLength: 5,
	StepsNumber: 4,
	randomMin: 0,
	randomMax: 9,
});

export const CONSOLE_MESSAGE = Object.freeze({
	inputCars: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
	tryNum: "시도할 횟수는 몇 회인가요?\n",
	result: "\n실행 결과",
	newLine: "\n",
	winner: "최종 우승자 : ",
});

export const ERROR_MESSAGE = Object.freeze({
	nameNum: "[ERROR] 자동차를 2대 이상 입력해주세요",
	nameForm: "[ERROR] 잘못된 형식입니다. 자동차 이름을 제대로 입력해주세요",
	nameLength: "[ERROR] 자동차 이름의 길이는 5자 이하여야 합니다",
	tryNum: "[ERROR] 숫자가 잘못된 형식입니다. 양수로 입력해주세요",
});
