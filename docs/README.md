## 자동차 경주 풀이 과정

1. 자동차 한 대는 name(이름),forwardCount(전진 수)를 가지고있는 객체로 상태값을 관리한다. 입력받은 자동차 이름을 쉼표(,)로 구분하여 n개를 배열로 가지고 시작한다.
   또한, 사용자는 몇 번의 이동을 시도 할 것인지 입력 할 수 있다.
   입력받는 값으로는 경주할 자동차 이름과, 시도횟수 이다.

   a. 자동차 이름이 5자를 초과하면 에러를 띄운다.

   b. 시도 횟수가 숫자가 아니면 에러를 띄운다.

2. for(혹은 forEach)문으로 배열을 순회하여,
   각 자동차마다 무작위 수를 구한 후 입력 값이 4이상일 경우 forwardCount를 +1를 하여 전진을 기록한다. 그 후 결과를 요구 사항에 맞게 출력해준다.

   a. 출력이 한 줄씩 더 줄바꿈 된 부분이 있는데 그부분은 빈값의 콘솔로 줄 바꿈을 해준다.

3. 시도 할 수를 전부 마치면, 배열을 forwardCount가 제일 높은 순으로 재 정렬하고,
   0번 인덱스의 자동차 이름을 출력한다.
   여기서 1번인덱스, 2번인덱스도 만약 0번 인덱스와 forwardCount가 같으면, 같이 출력해준다.

---

4. 추가된 요구 사항
   아래의 테스트 코드를 구현하였습니다.

### 풀이

1. 시도할 횟수가 숫자가 아닐 경우의 예외 처리

```javascript
test('시도할 횟수가 숫자가 아닐 경우의 예외 처리', async () => {
  const app = new App();
  const notNumber = 'abc';
  MissionUtils.Console.readLineAsync.mockResolvedValue(notNumber);

  await expect(app.getCycleCountInput()).rejects.toThrow('[ERROR]');
});
```

- mockResolvedValue를 사용하여 Console.readLineAsync의 결과 값을 'abc'로 모킹하였습니다(흉내 냈습니다.).

- 그러면 App Class 내부의 getCycleCountInput 메서드내부의 변수 cycleCount값은 'abc'가 되어 ERROR를 일의 킵니다.

```javascript
  async getCycleCountInput() {
    Console.print(TRY_COUNT);
    // 'abc'
    const cycleCount = await Console.readLineAsync('');
    const convertNumber = Number(cycleCount);
    if (isNaN(convertNumber)) {
      throw new Error(`${ERROR_PREFIX} : 시도 횟수는 숫자이어야 합니다.`);
    }
    this.#cycleCount = convertNumber;
  }
```

2. carValidator의 Car Class 생성

- 각각의 car가 Car Class에 맞게 instance가 잘 생성 되었는지 테스트 하였습니다.

```javascript
test('carValidator의 Car Class 생성', () => {
  const app = new App();
  const cars = '멍멍이,다람쥐,고양이';
  app.carValidator(cars);

  app.carArray.forEach((car) => {
    expect(car).toBeInstanceOf(Car);
  });
});
```
