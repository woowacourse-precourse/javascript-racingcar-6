import { MissionUtils } from '@woowacourse/mission-utils';

export default async function inputCarName() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ');
    const arr = input.split(',');

    if(!isCheckInputValue(arr) || !isCheckInputCount(arr)) {
        return 
    }

    return arr;
}

export function isCheckInputValue(arr) {
    if(arr.length < 2) {
        throw new Error('[ERROR] 경주를 위해 2개 이상 입력해주세요.');
    }

    return true;
}

export function isCheckInputCount(arr) {
    for(const value of arr) {
        if(value.length > 6) {
            throw new Error('[ERROR] 5자 이하만 가능합니다.');
        }
    }

    return true;
}