// 기능6. 우승자 정하기
export function winner(result_menu, name) {
  const ranking = [];
  for (let i = 0; i < result_menu.length; i++) {
    if (result_menu[i] === Math.max(...result_menu)) {
      ranking.push(name[i]);
    }
  }
  return ranking;
}
