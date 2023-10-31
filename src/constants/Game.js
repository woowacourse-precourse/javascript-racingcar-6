const GAME = Object.freeze({
	maxNamesCount: 10, // 터미널에서 보기 불편하지 않을 최대 길이
	minNamesCount: 1,
	maxTryCount: 50,
	minTryCount: 1,
	maxNameLength: 5,
	minNameLength: 1,
	moveThreshold: 4,
	inputNameDelimiter: ',',
	delimiterName: '쉼표',
	minRandomNum: 0,
	maxRandomNum: 9,
});

export default GAME;
