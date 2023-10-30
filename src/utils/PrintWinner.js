import { Console } from '@woowacourse/mission-utils';

/**
 * @description 가장 높은 이동 횟수를 가진 자동차를 우승자로 출력하는 함수
 * @param {Array} carNameArr 자동차 이름 배열
 * @param {Array} moveCount 자동차 별 이동 횟수
 */
export default async function PrintWinner(carNameArr, moveCount) {
    const maxMoveCount = Math.max(...moveCount);
    const maxMoveCountIdxArr = [];

    while(true) {
        const maxMoveCountIdx = moveCount.indexOf(maxMoveCount);
        if(maxMoveCountIdx === -1) break;
        maxMoveCountIdxArr.push(maxMoveCountIdx);
        moveCount[maxMoveCountIdx] = -1;
    }

    const winnerName = maxMoveCountIdxArr.map((maxMoveCountIdx) => carNameArr[maxMoveCountIdx]).join(', ');
    Console.print(`최종 우승자 : ${winnerName}`)
}