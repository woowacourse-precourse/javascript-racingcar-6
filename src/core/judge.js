/**
 * @param {Record<string, number>} board
 * @returns { string[] }
 */

export function judgeWinner(board) {
  const entries = Object.entries(board);
  const scores = Object.values(board);
  const maxScore = Math.max(...scores);

  return entries
    .filter(([_, score]) => {
      return score === maxScore;
    })
    .map(([name, _]) => name);
}
