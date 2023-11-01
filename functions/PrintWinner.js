import { Console } from "@woowacourse/mission-utils";

async function printWinner(carName, carAdvanceState) {
    let winnerList = [];

    for(let index in carName) {
        if(Math.max(...carAdvanceState) <= carAdvanceState[index]){
            winnerList.push(carName[index]);
        }
    }

    Console.print('최종 우승자 : ' + winnerList);
}

export default printWinner;