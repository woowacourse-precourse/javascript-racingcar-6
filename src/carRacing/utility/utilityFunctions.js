// 받아둔 함수를 내가 원하는 시점에 평가시키는 함수
const curry =
  (func) =>
  (arg, ..._) =>
    _.length ? func(arg, ..._) : (..._) => func(arg, ..._);

export const map = curry((func, iterable) => {
  let result = [];

  for (const a of iterable) {
    result.push(func(a));
  }

  return result;
});

// if문 대신 사용
export const filter = curry((func, iterable) => {
  let result = [];

  for (const value of iterable) {
    if (func(value)) result.push(value);
  }

  return result;
});

// 이터러블 값을 다른 값으로 축약해나가는 함수
export const reduce = curry((func, accumulate, iterable) => {
  if (!iterable) {
    iterable = accumulate[Symbol.iterator]();
    accumulate = iterable.next().value;
  }

  for (const a of iterable) {
    accumulate = func(accumulate, a);
  }

  return accumulate;
});

export const go = (...args) => {
  reduce((arg, func) => func(arg), args);
};
