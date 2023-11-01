# 구현할 기능목록

## 기능1.

### 자동차 이름

#### _- 입력 조건_

**\- 공백제거** : trim()으로 입력한 공백 제거

**\- 쉼표로 구분** : .split(',')로 구분

```JavaScript
const car = input.split(',').map((v) => v.trim());
```

### _- 예외처리_

**\- 5글자 이하** : 1~5글자 사이

**\- 비어있을 경우** : 아예 비어있을때

**\- 같은 이름 방지** : 출력시 이름이 같으면 구분하기 힘드니, 이름은 모두 다르게 설정

```JavaScript
if (
    car.filter((v) => v.length > 5).length !== 0 ||
    car.filter((v) => v === '').length > 0 ||
    [...new Set(car)].length !== car.length
  ) {
    throw new Error('[ERROR] 올바른 이름을 입력해주세요');
  }
```

## 기능2.

### 시도할 횟수

#### _- 입력 조건_

**\- 숫자입력** : 정수형으로 입력해야함

```JavaScript
if (parseInt(input) > 0) {
    return parseInt(input);
  } else {
    throw new Error('[ERROR] 올바른 숫자를 입력해주세요');
  }
```

## 기능3.

### 랜덤값을 받아 자동차 이동

#### _- 랜덤 조건_

**\- 0에서 9사이 값** : 0~9사이값이 주어짐

```JavaScript
for (let i = 0; i < name.length; i++) {
    computer.push(MissionUtils.Random.pickNumberInRange(0, 9));
  }
```

#### _- 실행 조건_

**1) 랜덤값이 4보다 작을때** : 정지 => '-'이 임력되지않음

**2) 랜덤값이 4보다 크거나 같을때** : 전진 => '-'이 1개 입력

```JavaScript
for (let i = 0; i < count; i++) {
    let output = random(name);
    temp = repeat(name, move, output);
    Console.print(``);
  }
```

## 기능4.

### 횟수만큼 반복

**\_누적** : 값이 쌓일때 이전의 '-'갯수 유지

<blockquote>

1회=> 자동차1: - (전진:랜덤값이 4이상)

2회=> 자동차1: - (정지:랜덤값이 4미만)

3회=> 자동차1: -- (전진:랜덤값이 4이상)</blockquote>

```JavaScript
for (let v = 0; v < name.length; v++) {
    forward(output, move, v);
    Console.print(`${name[v]} : ${'-'.repeat(move[v])}`);
  }
```

## 기능5.

### 전진조건

#### _- 실행 조건_

**\_ 전진** : 랜덤값을 받아 자동차 이동 기능 1회 실행

<blockquote> 횟수가 3이면, 자동차1은 총 3번 랜덤값을 받고 이동함</blockquote>

```JavaScript
if (output[v] >= 4) {
    move[v] += 1;
  }
```

## 기능6.

### 우승자 정하기

#### _- 출력 조건_

**1) 단일우승** : 가장 높은 값 1개 출력

**2) 공동우승** : 가장 높은 값 n개 출력

```JavaScript
if (output[v] >= 4) {
    move[v] += 1;
  }
```
