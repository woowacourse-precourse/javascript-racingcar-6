import Decision from '../src/modules/Decision.js';
import UpdatedInfo from '../src/modules/UpdatedInfo.js';

const mockMovingForward = (flags) => {
  Decision.moveForward = jest.fn();
  flags.reduce(
    (acc, flag) => acc.mockReturnValueOnce(flag),
    Decision.moveForward,
  );
};

test('실행 결과 메시지와 정보를 반환', () => {
  // given
  const isMovingForwards = [true, false, true];
  const input = new Map([
    ['Fiat', 1],
    ['BMW', 2],
    ['Volvo', 0],
  ]);
  const info = new Map([
    ['Fiat', 2],
    ['BMW', 2],
    ['Volvo', 1],
  ]);
  const message = 'Fiat : --\nBMW : --\nVolvo : -\n';

  mockMovingForward([...isMovingForwards]);

  // when
  const { getCurrentCarInfo } = UpdatedInfo;

  // then
  expect(getCurrentCarInfo(input)).toStrictEqual([message, info]);
});
