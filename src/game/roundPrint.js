import { MissionUtils } from '@woowacourse/mission-utils';

export default function roundPrint(carArr, scoreArr, car) {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if(number && advanceCondition(number)) {
        scoreArr[car] += '-';
    }

    MissionUtils.Console.print(`${carArr[car]} : ${scoreArr[car]}`);
}

export async function advanceCondition(number) {
    if(number < 5) {
        return false;
    }

    return true;
}