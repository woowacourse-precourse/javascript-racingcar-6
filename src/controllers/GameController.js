import { getCarNames, getAttemptCount } from "../views/InputView";
import { checkValidInput, checkValidCount } from "../models/CheckValidInput";
import createCars from "../models/CreateCars";
import { racingOutput, showWinner } from "../views/OutputView";
import { runRace, findWinner } from "../models/RunRace";

export const startGame = async () => {
    //자동차 이름 입력 받고 유효성 검사
    const inputName = await getCarNames();
    const name = checkValidInput(inputName);
    
    //시도 횟수 입력 받고 유효성 검사
    const count = await getAttemptCount();
    checkValidCount(count);

    createCars(name, count);
};

//입력받은 count에 따라 게임진행(반복)
export const runByCount = (cars, count) => {
    racingOutput("실행 결과");
    let carObject = {};
    for (let round = 0; round < count; round++) {
      carObject = runRace(cars);
      racingOutput(carObject);
    }

    determineWinner(carObject);
};

//우승자를 확인해서 view로 이동시키는 함수
export const determineWinner = (carObject) => {
    const winner = findWinner(carObject);
    showWinner(winner);
};