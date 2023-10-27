import GameView from '../src/view/gameView.js';
import { MESSAGE } from '../src/constants/messages.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(GameView, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('✨ [GameView] 클래스 메서드 테스트', () => {
  const logSpy = getLogSpy();

  test('print 메서드는 인자로 받은 메시지를 출력한다.', () => {
    const message = MESSAGE.START;

    GameView.print(message);
    expect(logSpy).toHaveBeenCalledWith(message);
  });
});
