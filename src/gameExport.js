import inputCarName from './inputCarName.js';
import gameCount from './gameCount.js';
import { randomNum, consoleResult } from './utils.js';

const carNames = await inputCarName();
const carNamesKey = Object.keys(carNames);
const gameCountNum = await gameCount();

// 게임 반복 횟수와 진행 로직.
async function gameExport() {
  let roundResult = '';
  for (let i = 0; i < gameCountNum; i++) {
    roundResult += createRoundResult(carNamesKey);
    if (i < gameCountNum - 1) {
      roundResult += `\n`;
    }
  }
  return roundResult;
}

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

// 게임 승리자 문자열 추출.
async function gameWinner() {
  const car = await gameExport();
  return splitLine(car);
}

function splitLine(car) {
  const lines = car.split('\n');

  const result = lines
    .filter((line) => line.trim() !== '')
    .map((item) => item.split(':'));

  return compareLineLength(result);
}

function findMaxLength(lines, startIndex) {
  let maxLength = 0;
  for (let i = startIndex; i < lines.length; i++) {
    const lineLength = lines[i][1].length;
    if (lineLength > maxLength) {
      maxLength = lineLength;
    }
  }
  return maxLength;
}

function getLongestLines(lines, maxLength, startIndex) {
  const result = [];
  for (let i = startIndex; i < lines.length; i++) {
    if (lines[i][1].length === maxLength) {
      result.push(lines[i][0].trim());
    }
  }
  return result;
}

function compareLineLength(lines) {
  const startIndex = lines.length - carNamesKey.length;
  const maxLength = findMaxLength(lines, startIndex);
  const result = getLongestLines(lines, maxLength, startIndex);

  return result.map((item) => item).join(', ');
}

export { gameExport, gameWinner };
