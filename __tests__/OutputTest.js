import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("자동차 경주 실행 결과 출력 테스트", () => {
  test('최종 결과를 정상적으로 출력하는지 확인', () => {
    const app = new App();
    app.cars = ['Alley', 'Tami', 'Yuna'];
    app.raceResults = 'Alley : --\nTami : ---\nYuna : -\n\n';
  
    const expectedOutput = 'Alley : --\nTami : ---\nYuna : -';
    
    const spy = jest.spyOn(console, 'log');
    app.showResults();
    
    expect(spy).toHaveBeenCalledWith(expectedOutput);
  });

  test('우승자를 정상적으로 출력하는지 확인', () => {
    const app = new App();
    app.cars = ['Alley', 'Tami', 'Yuna'];
    app.goTimes = { 'Alley': 2, 'Tami': 3, 'Yuna': 1 };
  
    const expectedOutput = '\n최종 우승자 : Tami';
    
    const spy = jest.spyOn(console, 'log');
    app.showWinners();
    
    expect(spy).toHaveBeenCalledWith(expectedOutput);
  });  
});