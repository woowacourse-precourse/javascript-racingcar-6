import { MissionUtils } from '@woowacourse/mission-utils';
import {
  CUT_OFF_NUM,
  getGameStage, setGameStage, getCarNames, setCarNames,
  getGameCnt, setGameCnt, setCarRace, getCarRace, getCarNum,
  askForCarNamesView, askForGameCntView,
  errorMessage,
} from './Model.js';

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

const eachCarPlay = function randomNumPlayForEachCar(idx) {
  const num = MissionUtils.Random.pickNumberInRange(0, 9);
  if (num < CUT_OFF_NUM + 1) {
    return;
  }
  setCarRace(idx);
};

const gameRound = (size) => {
  for (let i = 0; i < size; i += 1) {
    eachCarPlay(i);
  }
};

const gamePlay = () => {
  let gameCnt = getGameCnt();
  const numOfCars = getCarNum();
  while (gameCnt !== 0) {
    gameRound(numOfCars);
    console.log(getCarRace());
    gameCnt -= 1;
  }
};

const selectView = function selectTextForView() {
  setGameStage();
  const gameStage = getGameStage();
  switch (gameStage) {
    case 1:
      return askForCarNamesView;
    case 2:
      return askForGameCntView;
    default:
      gamePlay();
      return 'tmp';
  }
};

export {
  selectView, saveCarName, saveGameCnt, gamePlay,
};
