const CHECK_WINNER = (NAME,RESULT_ARR) => {
    const max = Math.max(...RESULT_ARR)
    return NAME.filter((_, INDEX) => RESULT_ARR[INDEX] === max);
};
export default CHECK_WINNER;