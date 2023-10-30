import { MissionUtils } from '@woowacourse/mission-utils';

const CarName = async startMessage => {
  const userInput = await MissionUtils.Console.readLineAsync(startMessage);
  const list = [];
  userInput.map(car => list.push(car));
};

export default CarName;
