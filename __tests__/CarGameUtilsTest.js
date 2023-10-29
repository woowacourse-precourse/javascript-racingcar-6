import * as utils from '../src/CarGameUtils';
import Car from '../src/Car.js';

describe('자동차 게임 유틸 함수 테스트', () => {
  /*
test굳이 안해도 되는지? - 입력받는 함수 ,프린트하는 함수
  test('자동차 이름 입력', () => {
        const input = "pobi";
        const carName = utils.inputCarNames();
        expect(carName).
    });*/

  test('랜덤값 받아오는지 확인', () => {
    expect(utils.getRandomNumber()).toBeLessThanOrEqual(9);
  });

  test('자동차 경주 게임 1 시도', () => {
    const carList = [new Car('pobi'), new Car('jay'), new Car('sjj')];
    utils.tryCarGame(carList);
    expect(carList[0].position).toBeLessThanOrEqual(1);
    expect(carList[1].position).toBeLessThanOrEqual(1);
    expect(carList[2].position).toBeLessThanOrEqual(1);

    expect(carList[0].position).not.toBeGreaterThan(1);
    expect(carList[1].position).not.toBeGreaterThan(1);
    expect(carList[2].position).not.toBeGreaterThan(1);
  });

  test('우승 자동차 이름 배열 리턴 확인', () => {
    const carList = [new Car('pobi'), new Car('jay'), new Car('sjj')];
    carList[0].position = 1;
    carList[1].position = 2;
    carList[2].position = 3;
    expect(utils.getWinners(carList)).toEqual(['sjj']);

    carList[1].position = 3;
    expect(utils.getWinners(carList)).toEqual(['jay', 'sjj']);
    expect(utils.getWinners(carList)).toContain('jay');
    expect(utils.getWinners(carList)).toContain('sjj');
    expect(utils.getWinners(carList)).not.toContain('pobi');
  });
});
describe('유효성 검사 테스트', () => {
  test('자동차 이름 유효성 검사 확인', () => {
    expect(utils.isValidCarName('0123')).toBeTruthy();
  });
  test('자동차 이름 유효성 검사 확인', () => {
    expect(utils.isValidCarName('sjj')).toBeTruthy();
  });
  test('자동차 이름 유효성 검사 확인', () => {
    expect(utils.isValidCarName('sjj1')).toBeTruthy();
  });
  test('자동차 이름 유효성 검사 확인', () => {
    expect(utils.isValidCarName('sjjjay')).toBeFalsy();
  });

  test('시도횟수 유효성 검사 확인', () => {
    expect(utils.isValidTryNum('123')).toBeTruthy();
  });
  test('시도횟수 유효성 검사 확인', () => {
    expect(utils.isValidTryNum('12a')).toBeFalsy();
  });
  test('시도횟수 유효성 검사 확인', () => {
    expect(utils.isValidTryNum('023')).toBeTruthy();
  });
});
