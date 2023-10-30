import { MissionUtils } from '@woowacourse/mission-utils';

/** 자동차 출발! */
export default async function isStart() {
    /** 1 ~ 9 사이의 무작위 값 생성 */
    const number = MissionUtils.Random.pickNumberInRange(0, 9);

    /* number가 4 이상일때 전진 */
    if (number >= 4) return true;
    else return false;
}
