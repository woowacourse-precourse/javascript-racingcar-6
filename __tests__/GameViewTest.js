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
    const expectedResult = `${name} : ${'-'.repeat(count)}`;

    view.printResult({ name, count });
    expect(logSpy).toHaveBeenCalledWith(expectedResult);
  });

  test('[printWinner] 인자로 받은 winners 배열이 비어있는 경우 없음을 출력한다.', () => {
    const expectedResult = `${MESSAGE.WINNER}${MESSAGE.NONE}`;

    view.printWinner([]);
    expect(logSpy).toHaveBeenCalledWith(expectedResult);
  });

  test('[printWinner] 인자로 받은 winners 배열에 있는 요소의 name을 우승자로 출력한다.', () => {
    const winnerList = [
      {
        name: 'reason',
        count: 4,
      },
    ];
    const winnerNames = winnerList.map((winner) => winner.name).join(', ');
    const expectedResult = `${MESSAGE.WINNER}${winnerNames}`;

    view.printWinner(winnerList);
    expect(logSpy).toHaveBeenCalledWith(expectedResult);
  });

  test('[printWinner] 인자로 받은 winners가 여러 명인 경우 우승자를 ,로 구분하여 출력한다.', () => {
    const winnerList = [
      {
        name: 'reason',
        count: 4,
      },
      {
        name: 'leeyu',
        count: 4,
      },
    ];
    const winnerNames = winnerList.map((winner) => winner.name).join(', ');
    const expectedResult = `${MESSAGE.WINNER}${winnerNames}`;

    view.printWinner(winnerList);
    expect(logSpy).toHaveBeenCalledWith(expectedResult);
  });
});
