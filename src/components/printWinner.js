export default function printWinner(CARS) {
    const forward = CARS.map((car) => car.go);
    const maxNumber = Math.max(...forward);

    const winners = CARS.filter((car) => car.go === maxNumber);

    const winnerNames = winners.map((car) => car.name).join(', ');

    return winnerNames;
}
