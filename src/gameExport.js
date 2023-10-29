import inputCarName from './inputCarName.js';
import gameCount from './gameCount.js';
import { randomNum, consoleResult } from './utils.js';

const carNames = await inputCarName();
const carNamesKey = Object.keys(carNames);
const gameCountNum = await gameCount();

function condition(key) {
  return (carNames[key] += randomNum() > 3 ? '-' : '');
}

function getUpdatedCarStatus(key) {
  return `${key} : ${condition(key)}\n`;
}

function createRoundResult(carNamesKey) {
  let result = '';
  for (let j = 0; j < carNamesKey.length; j++) {
    const key = carNamesKey[j];
    result += getUpdatedCarStatus(key);
  }
  return result;
}

async function gameExport() {
  let roundResult = '';
  for (let i = 0; i < gameCountNum; i++) {
    roundResult += createRoundResult(carNamesKey);
    if (i < gameCountNum - 1) {
      roundResult += `\n`;
    }
  }
  consoleResult(roundResult);
}

gameExport();
