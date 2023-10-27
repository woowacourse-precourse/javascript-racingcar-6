function validPlayerInput(players) {
  const filterPlayers = players.filter((player, i) => player.length > 5 || players.indexOf(player) !== i);

  if (filterPlayers.length !== 0) {
    throw new Error("[ERROR] 올바른 형식으로 이름을 입력하세요");
  }
}

function validTryInput(input) {
  if (isNaN(input)) {
    throw new Error("[ERROR] 숫자를 입력하세요");
  }

  const inputNum = Number(input);

  if (!Number.isInteger(inputNum) || inputNum < 0) {
    throw new Error("[ERROR] 올바른 숫자형식을 입력해주세요");
  }
}

export { validPlayerInput, validTryInput };
