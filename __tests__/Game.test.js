import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Game from '../src/Game.js';

const spyFn = jest.spyOn(Console, "print");
const mockFn = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn(() => {
    return Promise.resolve(input);
  });
};

// 최종 우승자 이름 출력
test("우승자 이름 출력 포맷 확인", async () => {
  const input = "alex,kyle";
  mockFn(input);

  const game = new Game();
  await game.setPlayerNames();
  game.printResult();

  expect(spyFn).toHaveBeenCalledWith(expect.stringContaining('최종 우승자 : alex, kyle'));
});