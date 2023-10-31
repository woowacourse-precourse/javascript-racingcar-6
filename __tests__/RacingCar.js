import App from '../src/App.js';
import { mockRandoms } from './ApplicationTest.js';

describe('자동차 경주 게임', () => {
  test.each([
    [' ', ['']],
    [',', ['', '']],
    [' , ', ['', '']],
    [' pobi , woni ', ['pobi', 'woni']],
  ])('입력값으로부터 공백을 제거하고 쉼표(,)로 구분하여 배열로 반환한다', (input, result) => {
    const app = new App();

    expect(app.parseCarNamesInput(input)).toEqual(result);
  });

  test.each([[['']], [['', '']], [['pobipobi']], [['pobi', 'pobi']]])('자동차 이름이 잘못된 형식일 때 오류 발생', (names) => {
    const app = new App();

    expect(() => app.validateCarNames(names)).toThrow('[ERROR]');
  });

  test('시도 횟수가 잘못된 형식일 때 오류 발생', () => {
    const inputs = ['pobi', '0', '-5', ''];
    const app = new App();

    inputs.forEach((input) => {
      expect(() => app.validateRounds(input)).toThrow('[ERROR]');
    });
  });

  test('이름을 입력받아, 자동차 데이터를 초기화한다.', () => {
    const inputs = ['pobi', 'woni', 'cony'];
    const results = [
      { name: 'pobi', moveCount: 0 },
      { name: 'woni', moveCount: 0 },
      { name: 'cony', moveCount: 0 },
    ];

    const app = new App();

    expect(app.createCars(inputs)).toEqual(results);
  });

  test('랜덤값이 4이상일 경우 true, 아닐 경우 false를 반환한다.', () => {
    const randoms = [3, 4];
    const results = [false, true];

    mockRandoms([...randoms]);

    const app = new App();

    results.forEach((result) => {
      expect(app.isMovable()).toBe(result);
    });
  });

  test('자동차 움직임 결과를 문자열로 반환한다', () => {
    const input = { name: 'pobi', moveCount: 0 };
    const result = 'pobi : ';

    const app = new App();

    expect(app.generateCarResultString(input)).toBe(result);
  });

  test('자동차들의 이동 횟수를 내림차순으로 정렬한다', () => {
    const cars = [
      { name: 'pobi', moveCount: 3 },
      { name: 'woni', moveCount: 2 },
      { name: 'cony', moveCount: 5 },
    ];
    const result = [
      { name: 'cony', moveCount: 5 },
      { name: 'pobi', moveCount: 3 },
      { name: 'woni', moveCount: 2 },
    ];

    const app = new App();
    app.cars = cars;

    expect(app.sortMoveCount()).toEqual(result);
  });

  test('최대 이동 횟수를 가진 자동차들을 찾아 반환한다', () => {
    const maxMoveCount = 3;
    const cars = [
      { name: 'pobi', moveCount: 3 },
      { name: 'woni', moveCount: 2 },
      { name: 'cony', moveCount: 3 },
    ];
    const result = [
      { name: 'pobi', moveCount: 3 },
      { name: 'cony', moveCount: 3 },
    ];

    const app = new App();

    expect(app.findWinners(cars, maxMoveCount)).toEqual(result);
  });

  test('우승자들의 이름을 문자열로 반환한다', () => {
    const winners = [
      { name: 'pobi', moveCount: 3 },
      { name: 'cony', moveCount: 3 },
    ];
    const result = ['pobi', 'cony'];

    const app = new App();

    expect(app.extractWinnerNames(winners)).toEqual(result);
  });

  test('우승자 정보를 문자열로 반환한다', () => {
    const winners = ['pobi', 'cony'];
    const result = '최종 우승자 : pobi, cony';

    const app = new App();

    expect(app.generateWinnerResultString(winners)).toBe(result);
  });
});
