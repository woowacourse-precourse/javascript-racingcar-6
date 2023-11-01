const CUT_OFF_NUM = 4;
const ASK_FOR_CARNAMES_VIEW = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const ASK_FOR_GAMECNT_VIEW = '시도할 횟수는 몇 회인가요?';

const ERROR_MESSAGE_WRONGTYPE = new Error('[ERROR] 잘못된 형식의 입력입니다.');
const ERROR_MESSAGE_EMPTY_VALUE = new Error('[ERROR] 일부 입력값이 없습니다.');

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

const NEW_LINE = '\n';
const addFinalGameResult = (winners) => {
  gameResultView = `${gameResultView}${NEW_LINE}${'최종 우승자 : '}${winners.join(', ')}`;
};

export {
  getGameStage, setGameStage, ASK_FOR_CARNAMES_VIEW, ASK_FOR_GAMECNT_VIEW,
  CUT_OFF_NUM, getCarNames, setCarNames,
  getGameCnt, setGameCnt, setCarRace, getCarRace, getCarNum,
  addGameRoundView, getGameResultView, addFinalGameResult,
  ERROR_MESSAGE_WRONGTYPE, ERROR_MESSAGE_EMPTY_VALUE,
};
