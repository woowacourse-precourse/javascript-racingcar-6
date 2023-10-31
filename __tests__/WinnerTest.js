import App from '../src/App';

const app = new App();
app.play();

describe('우승자 결과 테스트', () => {
  test('단독 우승자인 경우', () => {
    let inputMap = new Map();
    inputMap.set('a', 1);
    inputMap.set('b', 2);
    inputMap.set('c', 3);

    expect(app.chooseWinner(inputMap)).toEqual('c');
  });

  test('공동 우승자인 경우', () => {
    let inputMap = new Map();
    inputMap.set('a', 1);
    inputMap.set('b', 3);
    inputMap.set('c', 3);

    expect(app.chooseWinner(inputMap)).toContain('b', 'c');
  });
});
