import { MissionUtils } from "@woowacourse/mission-utils";

const createPlayer = (player) => {
    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const players = [];
    MissionUtils.Console.readLineAsync((player) => {
        if(validName){
            player.push();
        }
        if(players.length === 1){
            return endGame();
        }
        createNum();
    });
}

const validName = (player) => {
    if(player.length > 5){
        return endGame();
    }
    if(typeof(player) !== String){
        return endGame();
    }
    if(player === ''){
        return endGame();
    }
    return true;
}

const createNum = (num) => {
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    MissionUtils.Console.readLineAsync((num) => {
        if(validNum){
            playGame(num);
        }else{
            endGame();
        }
    });
}

const validNum = (num) => {
    if(typeof(num) !== Number){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        return endGame();
    }
    if(num < 1){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        return endGame();
    }
    if(num === ''){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        return endGame();
    }
    return true;
}

const carMove = () => {
    let move = 0;
    const randomNum = MissionUtils.Random.pickNumberInRange(0,9);
    if(randomNum >= 4){
        move += 1;
    }
    printResult();
}

const printResult = (move) => {
    let result = `${player} : `;
    let  i;
    for(let i = 0; i < move; i++){
        result += '-';
    }
    return resultGame();
}

const resultGame = (result) => {
    let moveResult = '';
    result.forEach((e) => {
      e.carMove();
      moveResult += `${printResult()}<br />`;
    });
    moveResult += '<br />';
    return moveResult;
}

const endGame = () => {
    MissionUtils.Console.close();
}

export default createPlayer();