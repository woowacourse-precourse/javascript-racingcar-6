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

## :one:차 구현

```
🎯 1차 구현은 "기능 구현"과 "테스트의 성공"에 집중한다.
```

<br>

1. 각 자동차에 해당하는 class를 생성한다.<br><br>
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
   ✦ 최종 우승자를 출력한다.

<br>
