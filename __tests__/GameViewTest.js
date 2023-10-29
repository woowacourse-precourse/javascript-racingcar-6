import GameView from '../src/view/GameView.js';
import { MESSAGE } from '../src/constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

const createSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('✨ [GameView] 클래스 메서드 테스트', () => {
  const logSpy = createSpy();
  const view = new GameView();

  test('[print] 인자로 받은 메시지를 출력한다.', () => {
    const message = MESSAGE.START;

    view.print(message);
    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('[printResult] name과 count키 객체를 인자로 받아 count만큼 - 개수를 출력한다.', () => {
    const name = 'reason';
    const count = 4;
    const expectedString = `${name} : ${'-'.repeat(count)}`;

    view.printResult({ name, count });
    expect(logSpy).toHaveBeenCalledWith(expectedString);
  });
});
