import { MissionUtils } from "@woowacourse/mission-utils";

let array = [];
const number = function (carNameArray) {
  for (let i = 0; i < carNameArray.length; i++) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNumber >= 4) array.push('-');
  if (randomNumber < 4) array.push('');
  }
  
  if(array.length === carNameArray.length)
  return [...array];
  if(array.length !== carNameArray.length)
  return [array[array.length - 1],array[array.length - 2],array[array.length - 3]];
}

export { number };




