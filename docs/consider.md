# 고려 사항들

## 1. 변경 예상

> 상수는 나중에 파일 따로 배정할 예정
> 이름 길이의 최소 최대 언제든 간편하게 변경가능하도록 또한 구분자도 변경 언제든지 가능하도록 설계

```js
export const isNameLength = (input) => {
  const NAME_LENGTH_MIN = 2;
  const NAME_LENGTH_MAX = 5;
  const DELIMITER = ',';
  return input.split(DELIMITER).every((name) => {
    return name.length >= NAME_LENGTH_MIN && name.length <= NAME_LENGTH_MAX;
  });
};
```

## 2. 에러 발생

### 문제

async/await 사용할 때 주의할 점은 하위 함수에서 async/await를 사용하는 함수가 포함되어있다면
해당 함수를 호출하는 최상단 함수부터 계속 async/await 키워드를 써줘야한다 중간에 단 한번이라도 빼먹으면 테스트 코드가 동작하지 않는다. 필자는 app.js에 await를 빼먹어서 계속 테스트에서 에러가 발생했다. 하지만 node는 정상 동작해서 알아차리기 쉽지 않다.
async/await를 가진 함수를 추상화할 때는 정말 주의 해야한다 추상화를 많이 할 수록 함수가 하나의 기능을 하는데는 좋겠지만 자칫 키워드를 하나라도 빼먹는 실수를 하면 에러를 찾는데 많은 시간이 소모된다.

```js
 async play() {
    this.#controller.startGame();
  }
```

```test
/Users/wonmac/woowa/javascript-racingcar-6/src/utils/validator/index.js:14
    if (!(0, _index.isNameLength)(carNames)) throw new Error('[ERROR] 이름의 길이가 유효하지 않습니다.');
```

### 해결

eslint 규칙중에 [require-await](https://eslint.org/docs/latest/rules/require-await) 규칙을 추가했다.
이 규칙을 추가하면 async/await 두개 모두 키워드를 쓰지 않는 실수를 제외하고 하나의 키워드만 있을 때 에러표시를 해준다.

> 에러 표시

```js
/*eslint require-await: "error"*/
async function foo() {
  doSomething();
}

bar(async () => {
  doSomething();
});
```

> 에러 표시 x

```js
/*eslint require-await: "error"*/
async function foo() {
  await doSomething();
}

bar(async () => {
  await doSomething();
});
```
