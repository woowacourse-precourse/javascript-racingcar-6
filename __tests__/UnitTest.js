import App from '../src/App';

describe('단일 함수 테스트', () => {
  const app = new App();

  test('입력받은 자동차 이름을 객체로', () => {
    const inputs = 'pobi,java';
    const carList = app.getCarList(inputs);

    expect(carList).toStrictEqual({ pobi: '', java: '' });
  });

  test('전진한 실행결과', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = { pobi: '', java: '' };
    const outputs = 'pobi : -\njava : \n';
    const randoms = [MOVING_FORWARD, STOP];

    expect(app.moveCar(inputs)).toStrictEqual(outputs);
  });

  test('전진한 거리 최대값', () => {
    const inputs = { pobi: '----', java: '', scv: '--' };
    const outputs = 4;

    expect(app.getMaxDistance(inputs)).toStrictEqual(outputs);
  });

  test('우승자 이름 반환', () => {
    const inputs = { pobi: '----', java: '', scv: '----' };
    const outputs = ['pobi', 'scv'];

    expect(app.getWinnerArr(inputs)).toStrictEqual(outputs);
  });
});
