import randomNumGenerator from "./RandomNumGenerator";

const eachRaceStart = (carNameArr) => {
  const carNum = carNameArr.length;
  const moveForwardArr = new Array(carNum).fill(0);
  for (let i = 0; i < carNum; i++) {
    const randomNum = randomNumGenerator();
    if (randomNum >= 4) {
      moveForwardArr[i] = 1;
    }
  }
  return moveForwardArr;
};

export default eachRaceStart;
