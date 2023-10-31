export default function selectWinner(carArr, scoreArr) {
    let max = -1;
    let winnerArr = [];
    
    for(const [index, score] of scoreArr.entries()) {
        if(score.length === max) {
            winnerArr.push(carArr[index]);
        }
        if(score.length > max) {
            winnerArr = [];
            max = score.length;
            winnerArr.push(carArr[index]);
        }
    }
    const winner = winnerArr.join(', ');

    return winner;
}