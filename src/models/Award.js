class Award {

    #winningDistance;

    getWinners(distanceBoard) {
        this.#getWinningDistance(distanceBoard);
        this.#setWinner(distanceBoard);
    }

    #getWinningDistance(distanceBoard) {
        const [[, winningPoint]] = distanceBoard;
        this.#winningDistance = winningPoint;
    }

    #setWinner(distanceBoard) {
        distanceBoard
            .filter(([, distance]) => distance === this.#winningDistance)
            .map(([name]) => name)
            .join(',')
    }
}

export default Award;