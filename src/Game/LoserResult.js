const loserResult = (winner,loser) => {
    loser = loser.filter(x => !winner.includes(x));
    return loser;
}
export default loserResult;