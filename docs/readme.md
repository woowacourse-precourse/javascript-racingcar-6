## 기능 구현(Components-Based Architecture)

### 컴포넌트 설계
    1. 게임 인터페이스 컴포넌트 : 사용자의 입력을 처리하고 결과를 표시
    2. 게임 로직 컴포넌트 : 게임 상태 관리, 기능 관리, 예외 처리


1. 게임 인터페이스 컴포넌트
    - 게임 시작 : 자동차 이름, 시도 횟수에 대한 질문 출력
        - `Console.print` API 메서드 사용
    - 사용자 입력 : 자동차 이름, 시도 횟수를 사용자가 입력
        - `Console.readLineAsync` API 메서드 사용
        - 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능
        - 사용자는 몇 번의 이동을 할 것인지를 입력
        - 사용자가 입력한 값은 게임 로직 컴포넌트에 전달
    - 실행 결과 출력 : 각 시도 별 진행 결과 출력
        - 자동차 경주 게임을 완료한 후 누가 우승했는지 출력(우승자는 한 명 이상일 수 있음)
        - 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분
        - 게임 로직에서 전달 받은 결과 값을 입출력 요구사항에 맞추어 출력

2. 게임 로직 컴포넌트
    - 입력한 값이 잘못되었는지 판별하는 기능
        - throw문을 이용해 [ERROR] 예외 처리
    - 자동차 정보를 저장하는 기능
        - 자동차 이름 저장
        - 게임 상태(각 자동차의 이동 횟수)를 저장하는 기능
    - 자동차의 이동 여부(랜덤 값)를 정하는 기능
        - `Random.pickNumberInRange` 함수 사용
        - 랜덤 값이 4 이상 일 경우 이동
    - 우승자의 정보를 전달하는 기능

---
<br>

### 구현한 기능

<table>
    <tr>
        <th style = 'width : 100px'>완료 상태</th>
        <th style = 'width : 200px'> 컴포넌트</th>
        <th>구현할 기능</th>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>인터페이스 컴포넌트</td>
        <td>게임 시작 문구 출력</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td rowsp>인터페이스 컴포넌트</td>
        <td>사용자 입력</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>인터페이스 컴포넌트</td>
        <td>실행 결과 출력</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>로직 컴포넌트</td>
        <td>예외 처리 기능</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>데이터 컴포넌트</td>
        <td>자동차 정보 저장 기능</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>로직 컴포넌트</td>
        <td>자동차 이동 여부 판별</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>로직 컴포넌트</td>
        <td>우승자 정보 전달 기능</td>
    </tr>   
</table>

<br>

### 사용자 입력 테스트

<table>
    <tr>
        <th style = 'width : 100px'>완료 상태</th>
        <th>테스트</th>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>자동차 이름은 쉼표 기준 구분</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>자동차 이름은 5자 이하로 제한</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>시도 횟수 입력 기능</td>
    </tr>
</table>

<br>

### 기능 테스트

<table>
    <tr>
        <th style = 'width : 100px'>완료 상태</th>
        <th>테스트</th>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>잘못된 값을 입력할 경우 예외 처리</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>주어진 횟수 자동차 움직임 판별</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>랜덤 값 0-9 중 4 이상일 경우 이동 판별</td>
    </tr>
</table>

<br>

### 출력 테스트

<table>
    <tr>
        <th style = 'width : 100px'>완료 상태</th>
        <th>테스트</th>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>자동차 게임 완료 후 누가 우승했는지 출력</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>우승자는 한 명 이상일 수 있음</td>
    </tr>
    <tr>
        <td><input type="checkBox" checked></td>
        <td>우승자가 여러 명일 경우 쉼표(,)로 구분</td>
    </tr>
</table>

### 전체 테스트

<table>
    <tr>
        <th style = 'width : 100px'>완료 상태</th>
        <th>테스트</th>
    </tr>
    <tr>
        <td><input type="checkBox" disabled></td>
        <td>전체 게임 테스트</td>
    </tr>
</table>

