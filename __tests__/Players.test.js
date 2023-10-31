import { Console, Random } from '@woowacourse/mission-utils';
import Players from '../src/Players.js';

const spyFn = jest.spyOn(Console, "print");
const mockFn = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
}

// 플레이어 이름 포맷 출력
test("플레이어 이름 출력 확인", () => {
  const players = new Players(['jason', 'kyle']);
  players.print();
  expect(spyFn).toHaveBeenCalledWith(expect.stringContaining('jason : '));
  expect(spyFn).toHaveBeenCalledWith(expect.stringContaining('kyle : '));
});

// 차수별 실행 결과 출력
test("한번 전진했을 경우의 출력 확인", () => {
  const players = new Players(['alex']);
  const numbers = [3, 4, 5];
  spyFn.mockClear();

  mockFn(numbers);
  players.race();
  players.race();
  players.race();
  players.print();

  expect(spyFn).toHaveBeenCalledWith(expect.stringContaining('alex : --'));
});