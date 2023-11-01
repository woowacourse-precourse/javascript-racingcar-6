import App from '../src/App.js';

describe('객체 생성 테스트', () => {
  test('initializeRoundResult메서드로 객체로 잘 초기화 되는지 확인', () => {
    const app = new App();
    const input = ['young', 'mimi', 'aoung'];
    const result = app.initializeRoundResult(input);

    expect(result).toEqual({ young: 0, mimi: 0, aoung: 0 });
  });
});
