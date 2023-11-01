import { MissionUtils } from '@woowacourse/mission-utils';
import {
  CUT_OFF_NUM, resetData,
  getGameStage, setGameStage, getCarNames, setCarNames,
  getGameCnt, setGameCnt, setCarRace, getCarRace, getCarNum,
  ASK_FOR_CARNAMES_VIEW, ASK_FOR_GAMECNT_VIEW, addGameRoundView, getGameResultView,
  ERROR_MESSAGE_WRONGTYPE, ERROR_MESSAGE_EMPTY_VALUE, addFinalGameResult,
} from './Model.js';

const resetModel = () => {
  resetData();
};

const saveCarName = function splitAndSaveCarNames(carNames) {
  const carNamesArr = String(carNames).split(',');
  for (let i = 0; i < carNamesArr.length; i += 1) {
    if (carNamesArr[i] === '') {
      throw ERROR_MESSAGE_EMPTY_VALUE;
    }
  }
  carNamesArr.forEach((element) => {
    if (element.length >= 6) {
      throw ERROR_MESSAGE_WRONGTYPE;
    }
  });
  setCarNames(carNamesArr);
};

const saveGameCnt = (gameCnt) => {
  const gameCntInt = parseInt(gameCnt, 10);
  if (Number.isNaN(gameCntInt)) {
    throw ERROR_MESSAGE_WRONGTYPE;
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
    if (resultArr[i].length === max) {
      winners = [...winners, carNames[i]];
    }
    if (resultArr[i].length > max) {
      max = resultArr[i].length;
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
      return ASK_FOR_CARNAMES_VIEW;
    case 2:
      return ASK_FOR_GAMECNT_VIEW;
    default:
      gamePlay();
      gameResult = getGameResultView();
      return gameResult;
  }
};

export {
  selectView, saveCarName, saveGameCnt, gamePlay, resetModel,
};
