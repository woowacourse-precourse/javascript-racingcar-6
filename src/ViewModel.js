import { MissionUtils } from '@woowacourse/mission-utils';
import {
  CUT_OFF_NUM,
  getGameStage, setGameStage, getCarNames, setCarNames,
  getGameCnt, setGameCnt, setCarRace, getCarRace, getCarNum,
  askForCarNamesView, askForGameCntView, addGameRoundView, getGameResultView,
  errorMessage, addFinalGameResult,
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
  if (num < CUT_OFF_NUM) {
    return;
  }
  setCarRace(idx);
};

const eachCarResult = function makeEachCarResult(idx) {
  let result = getCarNames()[idx];
  result += ' : ';
  result += getCarRace()[idx];
  result += '\n';
  return result;
};

const roundView = function makeViewForEachRound(size) {
  let roundResult = '';
  for (let i = 0; i < size; i += 1) {
    roundResult += eachCarResult(i);
  }
  roundResult += '\n';
  addGameRoundView(roundResult);
};

const gameRound = (size) => {
  for (let i = 0; i < size; i += 1) {
    eachCarPlay(i);
  }
  roundView(size);
};

const checkGameResult = (size) => {
  const resultArr = getCarRace();
  const carNames = getCarNames();
  let winners = [];
  let max = -1;
  for (let i = 0; i < size; i += 1) {
    if (resultArr[i].length > max) {
      max = resultArr[i];
      winners = [];
      winners.push(carNames[i]);
    }
  }
  addFinalGameResult(winners);
};

const gamePlay = () => {
  let gameCnt = getGameCnt();
  const numOfCars = getCarNum();
  while (gameCnt !== 0) {
    gameRound(numOfCars);
    gameCnt -= 1;
  }
  checkGameResult(numOfCars);
};

const selectView = function selectTextForView() {
  setGameStage();
  const gameStage = getGameStage();
  let gameResult = '';
  switch (gameStage) {
    case 1:
      return askForCarNamesView;
    case 2:
      return askForGameCntView;
    default:
      gamePlay();
      gameResult = getGameResultView();
      return gameResult;
  }
};

export {
  selectView, saveCarName, saveGameCnt, gamePlay,
};
