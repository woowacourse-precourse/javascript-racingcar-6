import App from '../src/App';

describe('App Class 메소드 테스트', () => {
  const app = new App();

  test('자동차 이름 문자열을 전달하면 이름 개수만큼 자동차를 생성한다.', () => {
    const input = 'pobi,woni,jun';
    const nameArr = input.split(',');

    app.createCar(input);
    expect(app.cars.length).toBe(3);

    nameArr.forEach((name, index) => {
      expect(app.cars[index].name).toBe(name);
    });
  });

  test('자동차 경주가 끝나면 우승자를 선출한다.', () => {
    const attempNumber = 4;
    app.startRace(attempNumber);

    expect(app.winners.length).toBeGreaterThan(0);
  });
});
