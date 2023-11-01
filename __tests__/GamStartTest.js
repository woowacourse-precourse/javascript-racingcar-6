import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('어플리케이션 입력 테스트', () => {
  test('자동차 이름 입력에서 이름의 길이가 5자리를 넘는지 확인', async () => {
    //given
    const inputs = ['hellllo', '1'];

    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력에서 이름에 중복이 있는지 없는지 확인', async () => {
    //given
    const inputs = ['kim,kim', '1'];

    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('사용자 숫자 입력에서 숫자 형식을 지키는 지 확인', async () => {
    //given
    const inputs = ['pobi,woni', 'helloworld'];

    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('사용자 숫자 입력에서 0이상의 숫자가 들어오는지 확인', async () => {
    //given
    const inputs = ['pobi,woni', '-1'];

    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
