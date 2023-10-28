import { MissionUtils, Console } from "@woowacourse/mission-utils";

function carRacing(carName, attempt) {
  const carNumbers = carName.length;
  let car = Array(carNumbers).fill(""); // 전진 횟수 저장 배열

  for (let i = 0; i < attempt; i++) {
    for (let j = 0; j < carNumbers; j++) {
      isGoingForward(car, j);
      console.log(`${carName[j]}`, car[j]);
    }
  }

  console.log(car);
}

function isGoingForward(currentCar, j) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  console.log("randNum ", randomNumber);
  if (randomNumber >= 4) {
    currentCar[j] += "-";
  }
  return currentCar;
}

export default carRacing;
