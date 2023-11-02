export const INPUT_REQUEST = Object.freeze({
	carName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
	trialFrequency: '시도할 횟수는 몇 회인가요?'
});

export const RESULT = Object.freeze({
	gameResult: '실행 결과',
	finalWinner: '최종 우승자 : '
});

export const ERROR = Object.freeze({
	name: "[ERROR]",
	//car name 
	noInput: '값을 입력해주세요.',
	moreThanTwo: '두 명 이상을 입력해주세요.',
	onlyUnderFive: '5자리 이하만 가능합니다.',
	// trial frequency
	noBlank: '공백은 빼고 입력해주세요.',
	onlyNumber: '숫자만 입력 가능합니다.',
	noUnderZero: '1 이상을 입력해주세요.',
	noDuplicate: '중복된 이름이 있습니다.'
});

