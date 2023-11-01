import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../Constant/constants';

const generateRandomNum = {
  //랜덤 숫자 생성
  async getRandomNum() {
    const randomNum = await Random.pickNumberInRange(NUMBER.MIN_RANDOM_NUMBER, NUMBER.MAX_RANDOM_NUMBER);
    return randomNum;
  },
};

export default generateRandomNum;
