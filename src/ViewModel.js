import {
  getGameStage, setGameStage, getCarNames, setCarNames,
  getGameCnt, setGameCnt,
  askForCarNamesView, askForGameCntView,
  errorMessage,
} from './Model.js';

const selectView = function selectTextForView() {
  setGameStage();
  const gameStage = getGameStage();
  switch (gameStage) {
    case 1:
      return askForCarNamesView;
    case 2:
      return askForGameCntView;
    default:
      return 'tmp';
  }
};

const saveCarName = function splitAndSaveCarNames(carNames) {
  const carNamesArr = String(carNames).split(',');
  carNamesArr.forEach((element) => {
    if (element.length >= 6) {
      throw errorMessage;
    }
  });
  setCarNames(carNamesArr);
};

const saveGameCnt = (gameCnt) => {
  const gameCntInt = parseInt(gameCnt, 10);
  if (Number.isNaN(gameCntInt)) {
    throw errorMessage;
  }
  setGameCnt(gameCntInt);
};

export { selectView, saveCarName, saveGameCnt };
