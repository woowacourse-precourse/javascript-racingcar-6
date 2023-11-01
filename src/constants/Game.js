const TRY_COUNT = {
	maxTryCount: 50,
	minTryCount: 1,
};

const NAMES_COUNT = {
	maxNamesCount: 10, // 터미널에서 보기 불편하지 않을 최대 길이
	minNamesCount: 1,
};

const NAME_LENGTH = {
	maxNameLength: 5,
	minNameLength: 1,
};

const DELIMITER = {
	inputNameDelimiter: ',',
	delimiterName: '쉼표',
};

const RANDOM_NUMBER_RANGE = {
	minRandomNum: 0,
	maxRandomNum: 9,
};

const GAME = Object.freeze({
	...TRY_COUNT,
	...NAMES_COUNT,
	...NAME_LENGTH,
	...DELIMITER,
	...RANDOM_NUMBER_RANGE,
	moveThreshold: 4,
});

export default GAME;
