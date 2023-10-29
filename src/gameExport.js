import inputCarName from './inputCarName.js';
import gameCount from './gameCount.js';
import { randomNum, consoleResult } from './utils.js';

const carNames = await inputCarName();
const carNamesKey = Object.keys(carNames);
const gameCountNum = await gameCount();

function condition(key) {
  return (carNames[key] += randomNum() > 3 ? '-' : '');
}

async function gameExport() {
  let roundResult = '';
  for (let i = 0; i < gameCountNum; i++) {
    for (let j = 0; j < carNamesKey.length; j++) {
      const key = carNamesKey[j];
      roundResult += `${key} : ${condition(key)}\n`;
    }
    if (i < gameCountNum - 1) {
      roundResult += `\n`;
    }
  }
  consoleResult(roundResult);
}

gameExport();
