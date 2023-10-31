<div align="center">
  
# [정리] 자동차 경주 :triangular_flag_on_post:
<br>

본 문서는 우테코 6기 [**2주차 미션 - 자동차 경주**](https://github.com/woowacourse-precourse/javascript-racingcar-6)의 구현에 대한 정리입니다.<br>
:black_nib: 구현 결과, :bricks: 디렉토리 구조, :books: 구현 기록 에 대한 간략한 설명을 포함하고 있습니다.

<br>

<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
</div>

<br>

본 구현은 외부 라이브러리 없이 순수 Vanilla JS를 통해서만 구현했습니다.<br>
또한 `Node.js` 버전 `18.17.1` 이상의 실행환경이 필요합니다 😏

</div>

<br>

## :black_nib: 구현 결과

<br>

### :hammer: 기능 명세

1. 경주할 자동차 이름을 `n`개 입력받는다.<br><br>
   ✦ 이름은 **쉼표**로 구분된다.

   ```
   pobi,woni,jun
   ```

<br>

2. 시도 횟수 `try`를 입력받는다.

<br>

3. 매 시도마다 `n`개의 자동차가 **전진** 혹은 **멈춤**을 수행한다.<br><br>
   ✦ **전진** - 0~9 사이의 무작위 값을 구한 후 그 값이 4 이상일 경우 <br>
   ✦ **멈춤** - 무작위 값이 4 미만일 경우<br>
   ✦ 자신의 현재 위치를 `-`를 이용하여 출력한다.

   ```
   pobi : --
   woni : ----
   jun : ---
   ```

<br>

4. `try`번의 시도 이후 우승자를 출력한다.<br><br>
   ✦ 우승자는 가장 많이 전진한 자동차이다.<br>
   ✦ 우승자가 여러 명일 경우 쉼표를 구분한다.

   ```
   최종 우승자 : pobi, jun
   ```

<br>

### :bug: 예외 처리

1. 예외가 발생하는 경우<br><br>
   ✦ `"[Error]"`로 시작하는 문구를 가진 에러를 발생시킨다.<br>
   ✦ 애플리케이션을 종료한다.

<br>

2. 예외 발생 경우는 다음과 같다.<br><br>
   ✦ 5자를 초과하는 이름이 입력된다.<br>
   ✦ 동명이인이 입력된다.<br>
   ✦ 시도횟수로 숫자 이외의 값이 입력된다.

<br>

### :warning: 주의사항

1. `package.json`을 변경해서는 안된다.
2. 프로그램 종료 시 `process.exit()`을 호출하지 않는다.
3. indent depth가 3이 넘지 않도록 구현한다.
4. Jest를 이용하여 본인이 정리한 기능 목록이 정상 작동함을 테스트한다.

<br>

## :bricks: 디렉토리 구조

<br>

```
📦__tests__
 ┣ 📜ApplicationTest.js
 ┣ 📜CarSetTest.js
 ┣ 📜CarTest.js
 ┣ 📜InputTest.js
 ┣ 📜IntegrationTest.js
 ┗ 📜StringTest.js

📦src
 ┣ 📜App.js
 ┣ 📜Car.js
 ┣ 📜CarSet.js
 ┣ 📜Constants.js
 ┣ 📜index.js
 ┗ 📜Input.js
```

 <br>

### :package: src

1.  `Car.js`<br><br>
    ✦ 하나의 자동차를 의미하는 `class Car`를 보유한다.<br>
    ✦ 자동차의 이름과 위치를 필드로 보유한다.<br>
    ✦ 자동차를 이동하고 위치를 출력하는 메소드를 보유한다.

 <br>

2.  `CarSet.js`<br><br>
    ✦ 자동차의 집합을 의미하는 `class CarSet`을 보유한다.<br>
    ✦ `Car` 인스턴스의 배열과 인스턴스의 위치값들 중 가장 큰 값을 필드로 보유한다.<br>
    ✦ 저장하고 있는 모든 `Car` 인스턴스를 이동시키고 위치를 출력하는 메소드를 보유한다.<br>
    ✦ 우승자들의 이름을 찾는 메소드를 보유한다.

 <br>

3. `Input.js`<br><br>
   ✦ 사용자 입력을 받는 메소드의 집합인 `class Input`을 보유한다.<br>
   ✦ 사용자로부터 자동차 모음 입력을 받고 그에 대한 예외 처리를 하는 메소드를 보유한다.<br>
   ✦ 사용자로부터 시도 횟수 입력을 받고 그에 대한 예외 처리를 하는 메소드를 보유한다.

<br>

4. `App.js`<br> <br>
   ✦ 게임의 진행을 맡는다.<br>
   ✦ `class Input`을 통해 사용자 입력을 받고 `CarSet` 인스턴스를 생성하여 넘겨준다.

<br>

### :package: tests

1. `CarTest.js`<br><br>
   ✦ `class Car`의 메소드들에 대한 테스트 코드이다.

 <br>

2.  `CarSetTest.js`<br><br>
    ✦ `class CarSet`의 메소드들에 대한 테스트 코드이다.

 <br>

3. `InputTest.js`<br><br>
   ✦ `class Input`의 메소드들에 대한 테스트 코드이다.

<br>

4. `IntegrationTest.js`<br><br>
   ✦ 기본적으로 제공되는 `ApplicationTest.js`의 확장 테스트 코드이다.

<br>

## :books: 구현 기록

<br>

 <div align="center">

보다 구체적인 작업 과정은 `docs/History.md`를 확인해주세요 👀

</div>

<br>

- **:one:차 구현**<br><br>
  ✦ 기능 구현과 테스트 통과에 집중한다. :white_check_mark:<br>
  ✦ 명확한 객체인 `class Car`를 생성한다.

<br>

- **:two:차 구현**<br><br>
  ✦ 보다 객체 지향을 고려하여 `class CarSet`과 `class Input`을 생성한다.<br>
  ✦ 비효율적인 코드를 리팩토링하고 코드를 분리한다. :recycle:

<br>

- **:three:차 구현**<br>
  ✦ Jest를 이용한 테스트코드를 작성한다.<br>
  ✦ 추가적인 예외처리를 진행한다. :test_tube:
