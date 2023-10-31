import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (game_players) => {
  App.makePlayerInfo = jest.fn();

  App.makePlayerInfo.mockImplementation(() => {
    let GAME_ROUND_RESULT = {};
    game_players.forEach((player) => {
      GAME_ROUND_RESULT[player] = 0;
    });
    return GAME_ROUND_RESULT;
  });
};

describe('게임 유저:점수 초기화 테스트', () => {
  test('게임 유저:점수 객체 생성 테스트', async () => {
    // given
    const GAME_PLAYERS = ['서진', 'harry', 'rose', 'lucy', '영현'];
    const output = { 서진: 0, harry: 0, rose: 0, lucy: 0, 영현: 0 };
    mockQuestions(GAME_PLAYERS);

    // when
    const result = App.makePlayerInfo();

    // then
    expect(result).toEqual(output);
  });
});
