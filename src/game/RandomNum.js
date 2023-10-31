import { Random } from '@woowacourse/mission-utils';
// 0-9 사이 무작위 수 생성
const generateRandomNum = () => {
  const randomNum = Random.pickNumberInRange(0, 9);
  return randomNum;
};

export default generateRandomNum;
