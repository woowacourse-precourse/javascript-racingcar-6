const CUT_OFF_NUM = 4;

const askForCarNamesView = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const askForGameCntView = '시도할 횟수는 몇 회인가요?';
const errorMessage = new Error('[ERROR] 잘못된 입력입니다.');

let gameStage = 0;
const setGameStage = function AddOneForGameStage() {
  gameStage += 1;
};
const getGameStage = function getGameStageNumber() {
  return gameStage;
};

let gameCnt = 0;
const setGameCnt = function setGameCnt(gameCntInput) {
  gameCnt = gameCntInput;
};
const getGameCnt = () => gameCnt;

let carNames = [];
let carRace = [];
let numOfCars = 0;
const setCarNames = function setCarNamesArr(carNamesInput) {
  carNames = carNamesInput;
  carRace = Array.from({ length: carNames.length }, () => '');
  numOfCars = carRace.length;
};
const getCarNames = function getCarNamesArr() {
  return carNames;
};

const setCarRace = (idx) => {
  carRace[idx] += '-';
};
const getCarRace = () => carRace;

const getCarNum = function getNumOfCars() {
  return numOfCars;
};

let gameResultView = '\n실행결과\n';
const addGameRoundView = (nextCar) => {
  gameResultView += nextCar;
};
const getGameResultView = () => gameResultView;

export {
  CUT_OFF_NUM,
  getGameStage, setGameStage, getCarNames, setCarNames,
  getGameCnt, setGameCnt, setCarRace, getCarRace, getCarNum,
  addGameRoundView, getGameResultView,
  askForCarNamesView, askForGameCntView,
  errorMessage,
};
