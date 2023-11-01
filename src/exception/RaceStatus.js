// 상수 모듈
import { NUMBER } from '../utils/Constants';

class RaceStatus {
  static reportTrackIssue(lap) {
    if (lap.length === NUMBER.ZERO) {
      throw new Error(
        '[ERROR] 트랙에 문제가 발생해 경기에 차질이 생겼습니다. 트랙을 확인해주세요.',
      );
    }
  }
}

export default RaceStatus;
