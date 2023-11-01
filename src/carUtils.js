import { Random, Console } from "@woowacourse/mission-utils";

// 예외 처리
function handling(length) {
    if (length > 5) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
}

// 자동차 이름 map 자료형 변환
export function carToMap(carNames, carMap) {
    carNames.split(',').forEach(name => {
    handling(name.length);
    carMap.set(name, "");
    });
}

// 자동차가 전진하는지 멈추는지 결정
function goAndStop() {
    return Random.pickNumberInRange(0, 9) >= 4;
}

// 전진하는 자동차 기록
export function currentMatchResults(carMap) {
    let highestScore = 0;
    carMap.forEach((value, key) => {
        if (goAndStop()) carMap.set(key, value + "-");
        if (highestScore < carMap.get(key).length) highestScore = carMap.get(key).length;
        Console.print(`${key} : ${carMap.get(key)}`);
    });
    Console.print('');
    return highestScore;
}


