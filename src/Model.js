const askForCarNamesView = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const askForGameCntView = '시도할 횟수는 몇 회인가요?';
let gameStage = 0;
const setGameStage = function AddOneForGameStage() {
  gameStage += 1;
};
const getGameStage = function getGameStageNumber() {
  return gameStage;
};
let carNames = [];
const setCarNames = function setCarNamesArr(carNamesInput) {
  carNames = carNamesInput;
}
const getCarNames = function getCarNamesArr() {
  return carNames;
}

const errorMessage = '[Error] 잘못된 입력입니다.';

export {
  getGameStage, setGameStage, getCarNames, setCarNames,
   askForCarNamesView, askForGameCntView,
   errorMessage,
};
