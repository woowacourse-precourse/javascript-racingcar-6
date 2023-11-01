## 🗒️ README 목차

- [🗒️ README 목차](#️-readme-목차)
- [✅ 구현 기능 목록](#-구현-기능-목록)
- [🎨 클래스 다이어그램](#-클래스-다이어그램)
- [✏️ 2주차 공부 내용](#️-2주차-공부-내용)

</br>

## ✅ 구현 기능 목록

<h4>- Models</h4>
<table>
  <tr>
    <th>클래스</th>
    <th>기능 및 상태</th>
  </tr>
  <tr>
    <td>Car</td>
    <td>
    </>
      <li><code>Random.pickNumberInRange()</code>를 사용하여 무작위 값 추출.</li>
      <li>속성: 이름(Name), 총 이동거리(Total Distance)</li>
       - 0에서 9 사이 무작위 값 추출 (이동거리로 사용).<br>
       -  값이 4 이상일 경우 전진 (총 이동거리 + 이동거리).<br>
       - 값이 3 이하일 경우 멈춤 (총 이동거리 + 0).<br>
    </td>
  </tr>
  <tr>
    <td>Name</td>
    <td>
     - 이름이 공백이 아니고 5자 이하인지 검증.<br>
      - 이름 앞뒤에 공백이 있을 경우 공백 제거(trim).
    </td>
  </tr>
  <tr>
    <td >RaceRound</td>
    <td >
      - 입력된 문자열이 숫자인지 검증하고 숫자로 변환.
    </td>
  </tr>
</table>
</br>
<h4>- Controller</h4>
<table>
  <tr>
    <th>클래스</th>
    <th>기능 및 상태</th>
  </tr>
  <tr>
    <td> RacingCarGame</br>
     RacingInitializer</br>
     RacingExecutor</br>
     RacingResult</br>
    </td>
    <td>
      <li> 속성: 시도 횟수, 자동차들(Cars - Car 인스턴스의 배열)</li>
      <li> 경주할 자동차 이름 입력 받아 Car 인스턴스 생성.</li>
      - 시도할 횟수도 함께 입력 받음.<br>
      - 게임 시작 시 각 자동차가 자신의 이동거리 계산.<br>
      - 각 라운드 결과를 OutputView에 전달하여 출력.<br>
      - 위 과정을 시도 횟수만큼 반복.<br>
      - 모든 자동차의 총 이동거리를 받아 가장 먼 거리의 자동차 이름 발표.<br>
      - 동점일 경우 이름을 쉼표와 공백으로 구분하여 모두 출력.
    </td>
  </tr>
</table>
</br>
<h4>- Views</h4>
<table>
  <tr>
    <th>클래스</th>
    <th>기능 및 상태</th>
  </tr>
  <tr>
    <td>InputView</td>
    <td>
      <li><code>Console.readLineAsync</code> 사용하여 입력 받음.</li>
      - 자동차 이름을 쉼표로 구분하여 입력 받음.<br>
      - 경주 시도 횟수 입력 받음.
    </td>
  </tr>
  <tr>
    <td>OutputView</td>
    <td>
      <li><code>Console.print</code>를 사용하여 출력.</li>
      - '실행 결과'를 출력.</br>
      -  각 자동차의 이름과 라운드별 총 이동거리를 입력 받아 출력.</br>
      - 최종 우승자(들)를 발표.
    </td>
  </tr>
</table>

</br>

## 🎨 클래스 다이어그램

| <img src="https://github.com/0jenn0/javascript-racingcar-6/assets/130737187/d26da270-c72f-40bb-a9e0-59f885e3628a" width="800"> |
| :----------------------------------------------------------------------------------------------------------------------------: |
|                                                         class diagram                                                          |

## ✏️ 2주차 공부 내용

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=jenn_n&slug=Jest-기본-문법-정리)](https://velog.io/@jenn_n/Jest-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC)
[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=jenn_n&slug=좋은-테스트-코드-FIRST-원칙)](https://velog.io/@jenn_n/%EC%A2%8B%EC%9D%80-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-FIRST-%EC%9B%90%EC%B9%99)
[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=jenn_n&slug=좋은-테스트-코드-RIGHT-BICEP-원칙)](https://velog.io/@jenn_n/%EC%A2%8B%EC%9D%80-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-RIGHT-BICEP-%EC%9B%90%EC%B9%99)
[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=jenn_n&slug=좋은-테스트-코드-CORRECT-원칙)](https://velog.io/@jenn_n/%EC%A2%8B%EC%9D%80-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-CORRECT-%EC%9B%90%EC%B9%99)
