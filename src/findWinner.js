export function findWinner(roundResults) {
    const maxDashCount = Math.max(...Object.values(roundResults).map((result) => result.split('-').length - 1));
    const winners = Object.keys(roundResults).filter((car) => roundResults[car].split('-').length - 1 === maxDashCount);
    return winners;
}
