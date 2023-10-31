import { MissionUtils } from '@woowacourse/mission-utils';

export default async function inputCarName() {
    const number = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요? ');

    if(!isCheckNumber(number) || !isCheckProperRange(number)) {
        return 
    }

    return number;
}

export function isCheckNumber(num) {
    if(isNaN(num)) {
        throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    return true;
};

export function isCheckProperRange(num) {
    if(+num <= 0 || +num >= 11) {
        throw new Error('[ERROR] 1부터 10까지 입력해주세요.');
    }

    return true;
}