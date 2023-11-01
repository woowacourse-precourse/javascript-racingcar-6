# 🚗 자동차 경주 기능 목록

## 유저

- [x] 차 이름 입력 (차 개수는 상관 없는가?/ 띄어쓰기나 특수문자 처리는?)
  - 안내문 : `경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)`
- [x] 시도 횟수 입력
  - 안내문 : `시도할 횟수는 몇 회인가요?`

## 자동차

- [x] 자동차 별 전진 횟수 결정
  - 랜덤값 생성
  - 랜덤값이 4 이상일 경우 전진
  - 자동차 승리 횟수 저장('-'문자로 저장)

## 컴퓨터

- [x] `실행 결과` 출력
- [x] 자동차 전진 횟수 출력
  - 시도 횟수만큼 반복
  - 출력 맨 아래 줄 띄우기 (`\n`)
- [x] 최종 우승자 출력
  - 여러개일 경우 -> 쉼표(,) + 띄어쓰기로 구분

## 유효성 검사

- [x] 입력받은 자동차 이름 검사

  - 쉼표(,)로 구분
  - 각 이름은 5자 이하
  - 영문, 한글, 숫자, 특수문자 가능 (띄어쓰기도 가능)
  - 자동차는 2대 이상이도록

  ```
  <예외처리>
  - 같은 이름이 있는 경우
  - 자동차를 입력하지 않은 경우
  - 이름 중 5글자를 초과하는 것이 있는 경우
  ```

- [x] 시도 횟수 유효성 검사

  ```
  <예외 상황>
  - 숫자가 아닌 값 입력
  - 1 이상의 양의 정수가 아닌 값 입력 (실수, 음의 정수, '0'..)
  ```

<br><br>

# 📁 파일 구조

<div align="center">
  <table>
    <tr>
      <th align="center">Folder</th>
      <th align="center">File</th>
      <th align="center">Description</th>
    </tr>
    <tr>
      <td><b>🕹&nbsp;&nbsp;controller</b></td>
      <td><b>RacingCarController</b></td>
      <td>레이싱 게임이 순서대로 진행되도록 컨트롤</td>
    </tr>
    <tr><td colspan="3"></td></tr>
    <tr>
      <td><b>💻&nbsp;&nbsp;model</b></td>
      <td><b>CarMoving</b></td>
      <td>자동차의 움직임 계산</td>
    </tr>
    <tr><td colspan="3"></td></tr>
    <tr>
      <td rowspan="2"><b>💬&nbsp;&nbsp;view</b></td>
      <td><b>Input</b></td>
      <td>사용자의 입력을 요청</td>
    </tr>
    <tr>
        <td><b>Output</b></td>
        <td>사용자에게 응답을 출력</td>
    </tr>
    <tr><td colspan="3"></td></tr>
    <tr>
      <td rowspan="2"><b>✅&nbsp;&nbsp;validate</b></td>
      <td><b>CarListCheck</b></td>
      <td>자동차 이름 입력값의 유효성 검사</td>
    </tr>
    <tr>
        <td><b>TryNumberCheck</b></td>
        <td>레이싱 횟수 입력값의 유효성 검사</td>
    </tr>
    <tr><td colspan="3"></td></tr>
    <tr>
      <td><b>📃&nbsp;&nbsp;util</b></td>
      <td><b>constants</b></td>
      <td>안내문과 에러 메시지에 관한 상수</td>
    </tr>
    <tr><td colspan="3"></td></tr>
  </table>
</div>

```
src
┣ controller
┃ ┗ RacingCarController.js
┣ docs
┃ ┗ README.md
┣ model
┃ ┗ CarMoving.js
┣ util
┃ ┗ constants.js
┣ validate
┃ ┣ CarListCheck.js
┃ ┗ TryNumberCheck.js
┣ view
┃ ┣ Input.js
┃ ┗ Output.js
┣ App.js
┗ index.js
```

<br><br>

# 🚨 테스트 목록

<div align="center">
  <table>
    <tr>
      <th align="center">File</th>
      <th align="center">Describe</th>
      <th align="center">Test</th>
    </tr>
    <tr>
      <td rowspan="3"><b>🚨&nbsp;&nbsp;ApplicationTest</b></td>
      <td rowspan="3"><b>자동차 경주 게임</b></td>
    </tr>
    <tr>
      <td>전진-정지</td>
    </tr>
    <tr>
      <td>이름에 대한 예외 처리</td>
    </tr>
    <tr><td colspan="3"></td></tr>
    <tr>
      <td rowspan="7"><b>🚨&nbsp;&nbsp;ValidateTest</b></td>
      <td rowspan="5">자동차 이름 입력 테스트</td>
      <td>split 메서드로 주어진 값을 구분</td>
    </tr>
    <tr>
      <td>이름을 하나도 입력하지 않은 경우</td>
    </tr>
    <tr>
      <td>중복되는 이름을 입력한 경우</td>
    </tr>
    <tr>
      <td>5글자를 초과하는 이름을 입력한 경우</td>
    </tr>
    <tr>
      <td>영문, 한글, 특수문자 입력 가능</td>
    </tr>
    <tr>
      <td rowspan="2">레이싱 횟수 입력 테스트</td>
      <td>1이상의 정수가 아닌 경우 (실수, 음수, 0, 빈칸 등)</td>
    </tr>
    <tr>
      <td>숫자가 아닌 형식을 입력한 경우</td>
    </tr>
    <tr><td colspan="3"></td></tr>
    <tr>
      <td rowspan="4"><b>🚨&nbsp;&nbsp;CarMovingTest</b></td>
      <td rowspan="4">자동차 랜덤 이동값 테스트</td>
      <td>자동차 랜덤값이 4 미만일 경우 전진하지 않음</td>
    </tr>
    <tr>
      <td>자동차 랜덤값이 4 이상일 때만 전진</td>
    </tr>
    <tr>
      <td>각 레이싱 별 우승자 계산(한 명일 경우)</td>
    </tr>
    <tr>
      <td>각 레이싱 별 우승자 계산(여러명인 경우)</td>
    </tr>
    <tr><td colspan="3"></td></tr>
    <tr>
      <td rowspan="4"><b>🚨&nbsp;&nbsp;StringTest</b></td>
      <td rowspan="4">문자열 테스트</td>
      <td>split 메서드로 주어진 값을 구분</td>
    </tr>
    <tr>
      <td>split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환</td>
    </tr>
    <tr>
      <td>substring 메서드로 특정 구간 값을 반환</td>
    </tr>
    <tr>
      <td>at 메서드로 특정 위치의 문자 찾기</td>
    </tr>
    <tr><td colspan="3"></td></tr>
  </table>
</div>

```
__tests__
 ┣ ApplicationTest.js
 ┣ CarMovingTest.js
 ┣ StringTest.js
 ┗ ValidateTest.js
```
