import { Console } from '@woowacourse/mission-utils';

function Winner(car, racing) {
  const winner = [];

  for (let i=0; i<racing.length; i++) {
    if (racing[i] === racing.reduce((longest, currentString) => currentString.length > longest.length ? currentString : longest, "")) {
      winner.push(car[i]);
    }
  }
  
  Console.print('최종 우승자 : ' + winner.map((winner) => winner).join(', '));
}

export default Winner;