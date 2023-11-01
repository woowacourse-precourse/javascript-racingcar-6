
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><div class="result-container"></div>`);
const { document } = dom.window;

const resultContainer = document.querySelector('.result-container');

const showResult = (cars) => {
  const racingResult = document.createElement('div');
  let resultString = '';

  cars.forEach((car) => {
    resultString += `${car.name}: ${printBar(car.forwardCount)} <br>`;
  });
  resultString += `<br>`;

  racingResult.innerHTML = resultString;
  resultContainer.appendChild(racingResult);
};

const printBar = (count) => {
  let forwardBar = '';

  for (let i = 0; i < count; i++) {
    forwardBar += '-';
  }

  return forwardBar;
};

const showWinner = (winners) => {
  const winner = document.createElement('div');

  winner.innerHTML = `최종 우승자 : ${winners.join(',')}`;
  resultContainer.appendChild(winner);
};

// 사용 예시
const cars = [
  { name: 'Car1', forwardCount: 3 },
  { name: 'Car2', forwardCount: 5 },
];

showResult(cars);

const winners = ['Car2'];

showWinner(winners);
