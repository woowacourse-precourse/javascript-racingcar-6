const jointWinnerDetermin = (sortedPosition, maximumPosition) => {
    let winnerList = [];
    for (let element of sortedPosition){
        if (element[1] == maximumPosition){
            winnerList.push(element[0]);
        }
    }
    return winnerList;
};

const winnerDetermine = (carData) => {
    let sortedPosition = Object.entries(carData).sort((a,b) => b[1] - a[1]);
    let maximumPosition = sortedPosition[0][1];
    let winner = jointWinnerDetermin(sortedPosition, maximumPosition);
    
    return winner.join(', ');
};

export default winnerDetermine;