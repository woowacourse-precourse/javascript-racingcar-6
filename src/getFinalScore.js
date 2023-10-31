function getFinalScore(allScore) {
    let winnerScoreLength = 0;
    for (let i = 0; i < allScore.length; i++) {
        if (allScore[i].length > winnerScoreLength) {
            winnerScoreLength = allScore[i].length;
        }    
    }  
    return winnerScoreLength; 
}

export default getFinalScore;