import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe('자동차 경주 실행 테스트', () => {
  test('자동차 경주 횟수만큼 반복 실행하는지 확인', () => {
    const app = new App();
    app.cars = ['Alley', 'Tami', 'Yuna'];
    app.raceTimes = '3';

    app.pickRandomNumbers = jest.fn(app.pickRandomNumbers);
    app.goStop = jest.fn(app.goStop);
    app.raceCars();

    expect(app.pickRandomNumbers).toHaveBeenCalledTimes(3);
    expect(app.goStop).toHaveBeenCalledTimes(3);
  });

  test('랜덤 숫자를 올바르게 생성하는지 확인', () => {
    const app = new App();
    app.cars = ['Alley', 'Tami', 'Yuna'];

    MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValueOnce(5).mockReturnValueOnce(2).mockReturnValueOnce(8);

    const randomNumbers = app.pickRandomNumbers({});

    expect(randomNumbers).toEqual({ 'Alley': 5, 'Tami': 2, 'Yuna': 8 });
  });

  test('전진-정지를 올바르게 나타내는지 확인', () => {
    const app = new App();
    app.cars = ['Alley', 'Tami', 'Yuna'];
    app.goTimes = { 'Alley': 0, 'Tami': 0, 'Yuna': 0 };
    app.raceResults = '';
  
    const randomNumbers = { 'Alley': 5, 'Tami': 2, 'Yuna': 8 };
    app.goStop(randomNumbers);
  
    expect(app.goTimes).toEqual({ 'Alley': 1, 'Tami': 0, 'Yuna': 1 });
    expect(app.raceResults).toBe("Alley : -\nTami : \nYuna : -\n\n");
  });
});