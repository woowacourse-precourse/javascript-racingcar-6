<div align="center">
  
# [정리] 자동차 경주 :triangular_flag_on_post:
<br>

본 문서는 우테코 6기 [**2주차 미션 - 자동차 경주**](https://github.com/woowacourse-precourse/javascript-racingcar-6)에 대한 명세입니다.<br>
_구현한 기능_, _디렉토리 구조_, _구현 기록_ 에 대한 간략한 설명을 포함하고 있습니다.

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

## 👩🏻‍💻 구현 기능

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
   ✦ **멈춤** - 무작위 값이 4 미만일 경우

<br>

4. `try`번의 시도 이후 우승자를 출력한다.<br><br>
   ✦ 우승자는 가장 많이 전진한 자동차이다.<br>
   ✦ 우승자가 여러 명일 경우 쉼표를 구분한다.

<br>

## :bug: 예외 처리

1. 사용자가 잘못된 값을 입력하는 경우<br><br>
   ✦ `"[Error]"`로 시작하는 문구를 가진 에러를 발생시킨다.<br>
   ✦ 애플리케이션을 종료한다.

<br>

## :warning: 주의사항

1. `package.json`을 변경해서는 안된다.
2. 프로그램 종료 시 `process.exit()`을 호출하지 않는다.
3. indent depth가 3이 넘지 않도록 구현한다.
4. Jest를 이용하여 본인이 정리한 기능 목록이 정상 작동함을 테스트한다.

<br>
