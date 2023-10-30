import { Console } from '@woowacourse/mission-utils';

export const outputCurrentProgress = results => {
  results.forEach(result => {
    const { name, distanceFromStart } = result;

    let distance = '';

    for (let i = 0; i < distanceFromStart; i++) {
      distance++;
    }

    Console.print(`${name} : ${distance}`);
  });

  Console.print('');
};

export const outputFinalProgress = results => {
  const distances = results.map(result => result.distanceFromStart);
  const maxValue = Math.max(...distances);

  const winner = results
    .filter(result => result.distanceFromStart === maxValue)
    .map(result => result.name);

  Console.print(`최종 우승자 : ${winner.join(', ')}`);
};
