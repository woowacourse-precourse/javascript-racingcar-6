import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('validatePlayerName', () => {
  test('사용자 이름 입력 유효성 테스트 - 무효한 입력', () => {
    //given
    const inputs = ['longName'];

    // when
    const app = new App();

    // then
    expect(() => app.validatePlayerName(inputs)).toThrow('[ERROR]');
  });

  test('사용자 이름 입력 유효성 테스트 - 유효한 입력', () => {
    // given
    const inputs = ['jeong', 'yeung,jin', 'test'];

    // when
    const app = new App();
    app.validatePlayerName([inputs]);

    // then
    expect(app.players).toEqual([
      { name: 'jeong', moveAttempts: 0 },
      { name: 'yeung', moveAttempts: 0 },
      { name: 'jin', moveAttempts: 0 },
      { name: 'test', moveAttempts: 0 },
    ]);
  });
});

describe('validateRacingRounds', () => {
  test('사용자 입력 레이싱 라운드 숫자 유효성 검사 - 무효한 입력', () => {
    // given
    const inputs = 'abc';

    // when
    const app = new App();

    // then
    expect(() => app.validateRacingRounds(inputs)).toThrow('[ERROR]');
  });
});
