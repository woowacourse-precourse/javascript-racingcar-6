import randomNumGenerator from './RandomNumGenerator.js';

const eachRaceStart = (carNameArr) => {
  const carNum = carNameArr.length;
  const moveForwardArr = new Array(carNum).fill(0);
  for (let i = 0; i < carNum; i += 1) {
    const randomNum = randomNumGenerator();
    if (randomNum >= 4) {
      moveForwardArr[i] = 1;
    }
  }
  return moveForwardArr;
};

export default eachRaceStart;
