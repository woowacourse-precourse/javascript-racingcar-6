import View from '../src/view/View';
import { Console } from '@woowacourse/mission-utils';

describe('출력 테스트', () => {
  const view = new View();
  const spy = jest.spyOn(Console, 'print');

  test('하나의 자동차 결과에 대해서만 출력한다.', () => {
    const expectedResult = '정준형 : ---';
    const [name, distance] = ['정준형', 3];

    view.printCarResult(name, distance);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(expectedResult));
  });

  test('공백 출력 함수 테스트', () => {
    view.printSpace();
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(''));
  });
});
