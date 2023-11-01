"use strict";
import { Console, Random } from "@woowacourse/mission-utils";
import Strings from "./resources/Strings";
import Board from "./Board";

export default class GameManager {
    /** @type {Board} */
    _board = null;
    /**
     * GameManager를 실행한다.
     */
    async play() {
        this._startGame();
        await this._playGame();
        this._finishGame();
    }
    /**
     * 게임을 시작한다.
     */
    _startGame() {
        Console.print(Strings.START);
        const carName = Console.readline(Strings.START);
        this._board = new Board(carName);
    }

    async _playGame() {
        Console.print(Strings.RESULT);
        this._board.raceStart();
    }

    _finishGame() {
        Console.print(Strings.WINNER + this._board.winner);
    }
}
