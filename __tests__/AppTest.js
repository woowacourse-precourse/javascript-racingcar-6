import { Console } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import User from '../src/User.js';
import Cars from '../src/Cars.js';

jest.mock('../src/User');
jest.mock('../src/Cars');

describe('App 클래스', () => {
  let app;
  let userSpy;
  let carsSpy;

  beforeEach(() => {
    userSpy = {
      promptCarNames: jest
        .spyOn(User.prototype, 'promptCarNames')
        .mockImplementation(function () {
          this.state = { ...this.state, carList: ['phobi', 'daeun'] };
        }),
      promptPlayNumber: jest
        .spyOn(User.prototype, 'promptPlayNumber')
        .mockImplementation(function () {
          this.state = { ...this.state, playNumber: 3 };
        }),
    };

    carsSpy = {
      race: jest.spyOn(Cars.prototype, 'race'),
    };

    app = new App();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("'play' 메소드가 정상적으로 실행되는지 테스트", async () => {
    Console.readLineAsync = jest
      .fn()
      .mockImplementationOnce(() => 'phobi,daeun')
      .mockImplementationOnce(() => '3');

    await app.play();

    // 'play' 메소드 실행 시, User에게 자동차 이름과 시도 횟수를 입력 받는지 테스트
    expect(userSpy.promptCarNames).toHaveBeenCalledTimes(1);
    expect(userSpy.promptPlayNumber).toHaveBeenCalledTimes(1);

    // 'play' 메소드 실행 시, Cars의 'race' 메소드가 호출되는지 테스트
    expect(carsSpy.race).toHaveBeenCalledTimes(1);
  });
});
