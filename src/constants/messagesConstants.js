import { MAX_VALUE_OF_ATTEMPTS } from './attemptsConstants.js';
import {
  MAX_NUMBER_OF_PLAYERS,
  MIN_NUMBER_OF_PLAYERS,
} from './carNameConstants.js';

export const INPUT_ATTEMPTS = '시도할 횟수를 입력하세요. : ';
export const INPUT_CARS =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : ';
export const RACE_STATUS = '경주 진행 결과';
export const RACE_INVALIDATED =
  '경주에 성공한 자동차가 없어, 경기를 무효 처리합니다.';

// error messages
export const ERROR_NAME_LENGTH = '[ERROR] 이름은 5자 이내여야 합니다.';
export const ERROR_NUMBER_OF_PLAYERS = `[ERROR] 경주에 참여하는 인원은 ${MIN_NUMBER_OF_PLAYERS}~${MAX_NUMBER_OF_PLAYERS}명이어야 합니다.`;
export const ERROR_ATTEMPTS = `[ERROR] 시도 횟수는 1~${MAX_VALUE_OF_ATTEMPTS} 사이의 숫자여야 합니다.`;
