const CHECK_WINNER = (NAME,RESULT_ARR) => {
    const max = Math.max(...RESULT_ARR)
    let winner = NAME.filter((_, INDEX) => RESULT_ARR[INDEX] === max);
    return winner;
};
export default CHECK_WINNER;