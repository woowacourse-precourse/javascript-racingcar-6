<div align="center">
  
# [기록] 자동차 경주 :triangular_flag_on_post:
<br>

본 문서는 우테코 6기 [**2주차 미션 - 자동차 경주**](https://github.com/woowacourse-precourse/javascript-racingcar-6)의 구현 과정을 상세히 담고 있습니다.<br>
구현 기록은 `N차 구현`-`N차 구현 보충`의 형식으로 작성했습니다. :black_nib:

<br>

<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
</div>

<br>

본 구현은 외부 라이브러리 없이 순수 Vanilla JS를 통해서만 구현했습니다.<br>
또한 `Node.js` 버전 `18.17.1` 이상의 실행환경이 필요합니다 😏

</div>

<br>

## :two:차 구현

```
🎯 보다 "객체지향적으로 구현"하고 "비효율적인 부분에 대해 리팩토링"한다.
```

<br>

1. 자동차의 집합에 대한 class를 생성한다.<br><br>
   ✦ 자동차 인스턴스들과 총 수를 저장한다.<br>
   ✦ 모든 자동차 인스턴스들이 움직이도록 한번의 시도를 진행한다.<br>

<br>

2. 위치 출력 시 repeat을 이용하여 매번 새로운 문자열 생성하는 방식은 비효율적이다 :weary: <br> 
각 자동차 position field와 함께 출력할 문자열 field를 생성한다.

<br>

3. App.js에서는 입력과 출력만 할 수 있도록 구현하는 것에 집중한다. :sunglasses:

<br>

## :one:차 구현

```
🎯 1차 구현은 "기능 구현"과 "테스트의 성공"에 집중한다.
```

<br>

1. 각 자동차 :car: 에 해당하는 class를 생성한다.<br><br>
   ✦ 자신의 이름과 현재 위치를 저장한다.<br>
   ✦ 랜덤한 숫자를 발생시키고 숫자에 따라 자신의 위치를 변경한다.<br>
   ✦ 현재 위치를 형식에 맞게 출력한다.

   ```
   pobi : ----
   ```

<br>

2. 한번의 게임에 대한 class를 생성한다.<br><br>
   ✦ 경주할 자동차와 시도 횟수를 입력받는다.<br>
   ✦ 입력에 대한 예외 처리를 수행한다.<br>
   ✦ 각 자동차에 대한 인스턴스를 생성하고 저장 · 관리한다.<br>
   ✦ 매 시도마다 자동차들의 위치를 형식에 맞게 출력한다.<br>
   ✦ :crown: 최종 우승자 :crown: 를 출력한다.

<br>
