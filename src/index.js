import { MissionUtils } from "@woowacourse/mission-utils";
import App from "./App.js";
import {isvalidCarNames, isvalidAttempt} from './validators.js';

async function start() {
    const app = new App();

    
    const carNamesInput = await MissionUtils.Console.readLineAsync("자동차 이름을 입력하세요 (쉼표(,)로 구분): ");
    const carNames = carNamesInput.split(',');
    console.log(carNames);
    isvalidCarNames(carNames);

    const attemptInput = await MissionUtils.Console.readLineAsync("몇 번의 이동을 할 것인가요?: ");
    const attempt = parseInt(attemptInput, 10);
    console.log(attempt);
    isvalidAttempt(attempt);
    // 게임 시작
    app.play(carNames, attempt);
}

start();