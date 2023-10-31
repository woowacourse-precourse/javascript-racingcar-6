<<<<<<< HEAD
const loserResult = (winner,loser) =>{
=======
const loserResult = (winner,loser) => {
>>>>>>> 50ccfde922b4411a40ca042db9bf87687c5c5a98
    loser = loser.filter(x => !winner.includes(x));
    return loser;
}
export default loserResult;