"use strict";

import { Console, Random } from "@woowacourse/mission-utils";
import Strings from "./resources/Strings";
import RepetitionNumber from "./RepetitionNumber";

export default class Board {
    /** @type {string} */
    _names = [];
    _repeat = 0;
    _eachPlayer = [];
    _winner = [];
    _dashes = "";

    constructor(input) {
        this._setRacingBoard(input);
        this._makeEachPlayer();
    }

    _setRacingBoard(input_string) {
        const names = input_string.split(",");
        _names = new Name(names);
        const repeat = Console.readline(Strings.REPETITION);
        _repeat = new RepetitionNumber(repeat);
    }
    // 각각의 플레이어애 해당하는 변수 생성후 초기값 0 지정
    _makeEachPlayer() {
        for (let i = 0; i < this._names.length; i++) {
            this._eachPlayer.push(0);
        }
    }
    // 변수별로 카운트를 0부터 시작해 함수를 돌려 증가시키기

    // 반복은 n번 ,, 이 떄 출력도 해 줘야함
    raceStart() {
        while (_repeat > 0) {
            for (let i = 0; i < this._eachPlayer.length; i++) {
                this._judgeRace(this._eachPlayer[i]);
                Console.print(`{_names[i]} : 막대기출력`);
            }
            _repeat--;
        }
    }
    // 진행하는 함수 만들기
    _judgeRace(count) {
        const randomNum = Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
            count++;
        }
    }
    // 우승자 찾기
    _findWinner() {
        let max = -Infinity;
        let indexes = [];
        for (let i = 0; i < this._eachPlayer.length; i++) {
            if (this._eachPlayer[i] > max) {
                max = this._eachPlayer[i];
                indexes = [i];
            } else if (this._eachPlayer[i] === max) {
                indexes.push(i);
            }
        }
        for (let i = 0; i < indexes.length; i++) {
            this._winner.push(_names[indexes[i]]);
        }
    }

    _printDash() {
        for (let i = 0; i < this._eachPlayer[0]; i++) {
            _dashes += "-";
        }
    }
}
