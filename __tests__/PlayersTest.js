import Player from '../src/model/Player';
import Players from '../src/model/Players';

describe('✨ [Players] 클래스 메서드 테스트', () => {
  let players;

  beforeEach(() => {
    players = new Players();
  });

  test('[addPlayer] 플레이어 인스턴스를 인자로 받아 players에 name과 count key값을 가진 오브젝트로 추가한다.', () => {
    players.addPlayer(new Player('reason'));

    expect(players.getPlayers()).toEqual([{ name: 'reason', count: 0 }]);
  });

  test('[setTryCount] 트라이 카운트를 인자로 받아 세팅한다.', () => {
    players.setTryCount(1);

    expect(players.getTryCount()).toBe(1);
  });

  test('[checkMoveCountNotZero] 인자로 받은 값이 0보다 크면 true를 반환한다.', () => {
    const valueList = [1, 2, 5, 10, 100];

    valueList.forEach((value) => {
      expect(players.checkMoveCountNotZero(value)).toBeTruthy();
    });
  });

  test('[checkMoveCountNotZero] 인자로 받은 값이 0이거나 0보다 작으면 false를 반환한다.', () => {
    const valueList = [0, -1, -4];

    valueList.forEach((value) => {
      expect(players.checkMoveCountNotZero(value)).toBeFalsy();
    });
  });
});
