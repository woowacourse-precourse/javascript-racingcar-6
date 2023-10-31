import { Random } from '@woowacourse/mission-utils';

const caculateEachTurnMoving = () => {
  const moving = Random.pickNumberInRange(0, 9);
  if (moving < 4) return '';
  return '-';
};

export default caculateEachTurnMoving;
