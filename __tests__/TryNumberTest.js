const number = require('../src/TryNumber');

test('pobi,woni,jun은 try_number만큼 자동차 경주를 진행한다.', ()=>{
  expect(number.number(['pobi','woni','jun'])).toEqual(['-','-','-']);
});

test('pobi,woni,jun은 try_number만큼 자동차 경주를 진행한다.', ()=>{
  expect(number.number(['pobi','woni','jun'])).toEqual(undefined);
});
