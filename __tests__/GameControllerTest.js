import { MESSAGE } from '../src/constants/messages';
import GameController from '../src/controller/GameController';

describe('✨ [GameController] 클래스 메서드 테스트 ', () => {
  let controller;
  const mockModel = {};
  const mockView = {
    getUserInputAsync: jest.fn(),
  };

  beforeEach(() => {
    controller = new GameController({ model: mockModel, view: mockView });
  });

  test('[getPlayers] 사용자로부터 경주할 자동차의 이름을 입력받는다. ', async () => {
    const mockNames = 'Reason,LeeYu';

    mockView.getUserInputAsync.mockResolvedValueOnce(mockNames);
    await controller.getPlayers();

    expect(mockView.getUserInputAsync).toHaveBeenCalledWith(MESSAGE.START);
  });

  test('[splitPlayerNames] 사용자의 이름을 인자로 넣으면 쉼표(,)로 구분한 값이 반환된다.', () => {
    const mockNames = 'Reason,LeeYu';
    const expectedResult = ['Reason', 'LeeYu'];

    expect(controller.splitPlayerNames(mockNames)).toEqual(expectedResult);
  });
});
