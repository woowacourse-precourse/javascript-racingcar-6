import { WinnerDto } from "./winnerDto";
// @ts-check
export class WinnersDto {
  /**
   * @type {WinnersDto[]}
   */
  #winners;
  /**
   *
   * @param {WinnerDto[]} winnerDtoList
   */
  // [WinnerDto,WinnerDto,WinnerDto, ... ]
  constructor(winnerDtoList) {
    this.#winners = Object.freeze(winnerDtoList);
  }
  /**
   * @returns {WinnerDto[]}
   */
  get winners() {
    return this.#winners;
  }
}
