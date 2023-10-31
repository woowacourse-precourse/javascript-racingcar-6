import { MissionUtils } from '@woowacourse/mission-utils';

const MAX_CAR_NAME = 5;
const MOVE_RANDOM_NUM = 4;

export const getCarArrFromInputValue = async () => {
  let inputCarNames = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  let carArr = inputCarNames.split(',').map((item) => {
    return { name: item, moveCnt: 0 };
  });

  carArr.forEach((carInfo) => {
    if (carInfo.name.length > MAX_CAR_NAME)
      throw new Error('[ERROR] 자동차 이름은 다섯 글자 이하로 입력해주세요.');
    if (!/^[a-zA-Z]+$/.test(carInfo.name)) {
      throw new Error('[ERROR] 자동차의 이름은 알파벳만 가능합니다.');
    }
  });

  let carArrToStr = carArr.map((carInfo) => JSON.stringify(carInfo));

  let isDuplicated = carArrToStr.some(
    (carInfoStr) =>
      carArrToStr.indexOf(carInfoStr) !== carArrToStr.lastIndexOf(carInfoStr)
  );

  if (isDuplicated) {
    throw new Error('[ERROR] 중복된 이름이 있습니다.');
  }

  return carArr;
};

export const getTryNumber = async () => {
  let inputTryNumber = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n'
  );

  if (isNaN(Number(inputTryNumber))) {
    throw new Error('[ERROR] 숫자만 입력해주세요.');
  }
  return Number(inputTryNumber);
};

export const calculateMoveCntFromRandomNumber = (carArr) => {
  carArr.forEach((carInfo) => {
    let random = MissionUtils.Random.pickNumberInRange(0, 9);
    if (random >= MOVE_RANDOM_NUM) carInfo.moveCnt++;
  });
};

export const winnerSelectFromMoveCnt = (carArr) => {
  let finerWinner = '';
  let maxMoveCnt = 0;

  carArr.forEach((carInfo) => {
    if (carInfo.moveCnt > maxMoveCnt) {
      maxMoveCnt = carInfo.moveCnt;
    }
  });

  carArr.forEach((carInfo) => {
    if (carInfo.moveCnt === maxMoveCnt) {
      if (finerWinner) {
        finerWinner += ', ';
      }
      finerWinner += carInfo.name;
    }
  });
  MissionUtils.Console.print(`최종 우승자 : ${finerWinner}`);
};
