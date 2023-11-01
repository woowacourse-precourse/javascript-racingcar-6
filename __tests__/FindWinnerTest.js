import { findWinner } from "../src/util/FindWinner.js";

test('점수 배열, 플레이어이름 배열을 이용해 우승자 추출기 테스트', () => {
  const playersArray = ['카멘','카마인','카단','카제로스','루페온','프로키온'];
  const scoreArray = [4,7,1,3,7,7];
  const result = ['카마인','루페온','프로키온'];

  expect(findWinner(playersArray, scoreArray)).toEqual(result);
});
