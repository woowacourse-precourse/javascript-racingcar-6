/**
 * Race 관련 정보를 담고 있는 클래스
 * @property {object} racingCars - 참가 자동차 목록
 * @property {number} totalRound - 총 시도 횟수
 */
class Race {
    /** @type {object} */
    #racingCars;

    /** @type {number} */
    #totalRound;

    /**
     * 생성자
     * @param {object} racingCars - 참가 자동차 목록
     * @param {number} totalRound - 총 시도 횟수
     */
    constructor(racingCars = [], totalRound = 0) {
        this.#racingCars = racingCars;
        this.#totalRound = totalRound;
    }

    /**
     * 참가 자동차 목록 반환
     * @returns {object} 참가 자동차 목록
     */
    getracingCars() {
        return this.#racingCars;
    }

    /**
     * 총 시도 횟수 반환
     * @returns {number} 총 시도 횟수
     */
    getTotalRound() {
        return this.#totalRound;
    }

    /**
     * 참가 자동차 목록에 자동차 추가
     * @param {object} car - 참가 자동차
     */
    addRacingCar(car) {
        this.#racingCars.push(car);
    }
}

export default Race;