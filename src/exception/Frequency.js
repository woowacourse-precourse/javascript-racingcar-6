import BaseExceptionHandler from './Errorcase';

// 상수 모듈
import { NUMBER } from '../utils/Constants';

class Frequency extends BaseExceptionHandler {
  constructor(laps) {
    super();
    this.laps = laps;
  }

  handleException() {
    const { laps } = this;
    if (NUMBER.ZERO >= laps || laps >= NUMBER.TWENTY) {
      throw new Error(
        '[ERROR] 저희 F1 월드 챔피언쉽은 최소 1바퀴, 최대 20바퀴만 돌 수 있습니다.',
      );
    }

    if (!Number.isInteger(Number(laps))) {
      throw new Error('[ERROR] 정수만 작성할 수 있습니다.');
    }
  }
}

export default Frequency;
