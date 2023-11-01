import randomNumber from '../Util/randomNumber.js';
import racingcarView from '../View/racingcarView.js';

class racingcarModel {
	constructor(carList, count) {
		this._count = count;
		this._carList = carList;
		this._racingResult = [];
		this.initRacingResultArray();
		this.racing();
	}

	initRacingResultArray() {
		for(let i = 0; i < this._carList.length; i ++) {
			this._racingResult[i] = new Array();
		}
	}

	racing() {
		let index = 0;
		while (index < Number(this._count)) {
			this.turn(index++);
		}
		this.printResult();
	}

	turn(index) {
		let j = 0;
		while (j < this._carList.length) {
			if (index === 0) {
				this._racingResult[j][index] = this.moveOrStop();
			} else {
				this._racingResult[j][index] = this._racingResult[j][index - 1] + this.moveOrStop();
			}
			j++;
		}
	}

	moveOrStop() {
		const number = randomNumber();
		return (number >= 4 ? 1 : 0);
	}

	printResult() {
		racingcarView.displayMessage('\n실행 결과');
		for (let count = 0; count < this._count; count++) {
			for(let i = 0; i < this._carList.length; i++) {
				racingcarView.displayMessage(this.eachCarResult(i, count));
			}
			racingcarView.displayMessage('');
		}
		this.getWinner();
	}

	eachCarResult(index, count) {
		let message = '';
		message += this._carList[index];
		message += ' : ';
		let i = 0;
		while (i++ <  this._racingResult[index][count]) {
			message += '-';
		}
		return message;
	}

	getWinner() {
		const result = [];
		this._racingResult.forEach((element) => {
			result.push(element[this._count - 1]);
		});
		const maxNumber = Math.max(...result);
		const winnerIndex = [];
		for (let i = 0; i < result.length; i++) {
			if (result[i] === maxNumber) {
				winnerIndex.push(i);
			}
		}
		this.printWinner(winnerIndex);
	}

	printWinner(winnerIndex) {
		let message = '최종 우승자: ';
		winnerIndex.forEach((winner, i) => {
			if (i === 0) {
				message += this._carList[winner];
			} else {
				message += ' , ';
				message += this._carList[winner];
			}
		})
		racingcarView.displayMessage(message);
	}
}

export default racingcarModel;