const ValidateGameNumber = (gameNumber) => {
  if (gameNumber <= 0 || !/^\d+$/.test(gameNumber)) {
    throw '[ERROR] 게임 횟수는 0보다 큰 숫자를 입력하셔야 합니다.';
  }
};

export default ValidateGameNumber;
