import { Track, User } from '../domain/index.js';

const RacingService = Object.freeze({
  /**
   * 주어진 레이싱 조건으로 트랙을 생성 후 결과를 계산하고 반환합니다.
   * @param {string[]} names Track에 참가할 유저의 이름 목록
   * @param {number} lap Track의 총 랩 수
   * @returns {{
   *  records: {
   *    [key: string]: string
   *  }[],
   *  winners: string[]
   * }} 랩별 결과와 우승자 정보를 포함한 객체
   */
  getResult(names, lap) {
    /**
     * @type {{
     *    [key: string]: string
     *  }[]}
     */
    const records = [];
    const users = Array.from(names, User.of);
    const track = Track.of(users, lap);

    while (!track.isEnd()) {
      track.processLap();
      records.push(track.getCurrentLapResult());
    }
    const winners = track.getCurrentWinners();

    return { records, winners };
  },
});

export default RacingService;
