export default function CheckWinner(carArr) {
  const winnerList = [];
  let max = 0;

  carArr.forEach((car) => {
    const carAdvance = car.getAdvance();
    if (carAdvance > max) {
      max = carAdvance;
    }
  });

  carArr.forEach((car) => {
    const carAdvance = car.getAdvance();
    if (carAdvance === max) {
      winnerList.push(car.getName());
    }
  });

  return winnerList;
}
