import GameUi from "../view/GameUi.js";
import Game from '../game/Game.js';
class GameManager {
    constructor() {
        this.game = new Game();
        this.gameUi = new GameUi();
    }
    
    // 게임 초기 설정 (자동차 이름, 게임 시도횟수 설정)
    async initGame() {
        const CAR_NAMES_INPUT = await this.gameUi.askCarName();
        this.game.storeCars(CAR_NAMES_INPUT);
    }

    // 레이스 게임 시작
    async startRace() {
        const ATTEMPT_COUNT = await this.gameUi.askAttemptCount();
        for (let attemptedCount = 0; attemptedCount < ATTEMPT_COUNT; attemptedCount++) {
            this.game.playEachRaceGame();
            this.gameUi.printeachRaceGame();
        }
    }


}
export default GameManager;