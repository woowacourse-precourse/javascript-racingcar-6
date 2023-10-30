// 이터러블 값을 다른 값으로 축약해나가는 함수
export const reduce = (func, accumulate, iterable) => {
  if (!iterable) {
    iterable = accumulate[Symbol.iterator]();
    accumulate = iterable.next().value;
  }

  for (const a of iterable) {
    accumulate = func(accumulate, a);
  }

  return accumulate;
};

export const go = (...args) => {
  reduce((arg, func) => func(arg), args);
};
