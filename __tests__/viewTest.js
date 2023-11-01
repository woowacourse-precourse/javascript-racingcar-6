import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

describe('App 클래스 함수 test', () => {
  const app = new App();
  test('App 생성자 호출 확인', () => {
    console.log(app);
    expect(app).toEqual({
      cars: { list: [], times: 0 },
      view: {},
      winnerList: [],
    });
  });
});
