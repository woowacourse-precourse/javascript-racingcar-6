import { Random } from '@woowacourse/mission-utils'
import { FIRSTNUM, LASTNUM } from '../constants/constants';

const randomNumGenerator = () => {
  const number = Random.pickNumberInRange(FIRSTNUM, LASTNUM);
  return number;
}

export default randomNumGenerator;