import { ERROR_MESSAGE, MESSAGE } from '../src/constants/messages';
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

  test('[getPlayers] 구분한 이름들에 대해 유효성 검사를 수행한다.', async () => {
    const expectedPlayers = ['Reason', 'LeeYu'];

    controller.checkValidatePlayer = jest.fn();
    controller.splitPlayerNames = jest
      .fn()
      .mockReturnValueOnce(expectedPlayers);

    await controller.getPlayers();

    expect(controller.checkValidatePlayer).toHaveBeenCalledWith(
      expectedPlayers,
    );
  });

  test('[getPlayers] 플레이어의 이름을 쉼표(,)로 구분하고 배열로 반환한다.', async () => {
    const mockNames = 'Reason,LeeYu';
    const expectedPlayers = ['Reason', 'LeeYu'];

    mockView.getUserInputAsync.mockResolvedValueOnce(mockNames);
    controller.splitPlayerNames = jest
      .fn()
      .mockReturnValueOnce(expectedPlayers);

    const result = await controller.getPlayers();

    expect(result).toEqual(expectedPlayers);
  });

  describe('✨ 예외처리 테스트', () => {
    test('[checkValidatePlayer] player가 2명 미만인 경우 에러를 발생한다.', () => {
      const players = ['Reason'];

      expect(() => controller.checkValidatePlayer(players)).toThrow(
        ERROR_MESSAGE.PLAYER_COUNT,
      );
    });

    test('[checkValidatePlayer] player가 10명을 초과한 경우 에러를 발생한다.', () => {
      const players = [
        'Reason',
        'Reason2',
        'R2ASON',
        'LEEYU',
        'YOU',
        'YU',
        'YUTO',
        'LEEYOU',
        'REASONS',
        'REASONZ',
        'nyang',
      ];

      expect(() => controller.checkValidatePlayer(players)).toThrow(
        ERROR_MESSAGE.PLAYER_COUNT,
      );
    });

    test('[checkValidatePlayer] player의 이름이 중복된 경우 에러를 발생한다.', () => {
      const players = ['REASON', 'REASON'];

      expect(() => controller.checkValidatePlayer(players)).toThrow(
        ERROR_MESSAGE.DUPLICATION,
      );
    });

    test('[checkValidateName] player의 이름이 영문이 아닌 경우 에러를 발생한다.', () => {
      const playerName = '이유';

      expect(() => controller.checkValidateName(playerName)).toThrow(
        ERROR_MESSAGE.INVALID_NAME,
      );
    });

    test('[checkValidateName] player의 이름이 5글자 이상인 경우 에러를 발생한다.', () => {
      const playerName = 'IamSinRoeEYo';

      expect(() => controller.checkValidateName(playerName)).toThrow(
        ERROR_MESSAGE.NUMBER_OF_CHARACTERS,
      );
    });
  });
});
