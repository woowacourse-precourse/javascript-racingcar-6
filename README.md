## 구현 기능 목록

### 자동차 이름 입력받기

- 입력받기

### 자동차 목록 만들기

- 쉼표로 구분했을 때, 5자 이상인지 확인하기
- 자동차 이름, 횟수를 담은 배열 만들기

### 횟수 입력 받기

- 입력받기
- 숫자가 아니라면 에러 발생 시키기

### 자동차 이동 시키기

- 랜덤 숫자를 이용해 움직임 여부 결정하기
- 움직임 여부에 따라 자동차 이동시키기

### 라운드 결과 출력하기

- 자동차 이름, 점수에 따라 문자열 생성하기
- 출력하기

### 우승자 발표하기

- 우승자 가려내기
- 우승자 출력하기

## 기능별 test 목표

- 자동차 목록 만들기 : 생성된 자동차 배열이 목표한 자료구조 형식에 맞는지 확인

  - 입력받기(test생략)
  - 쉼표로 구분했을 때, 5자 이하인지 확인하기 : 입력에 따라 적절히 판별하는지 확인
    - : 쉼표로 구분한 이름이 5자 이하인지 확인
    - : 쉼표로 구분한 이름이 특수기호, 공백, 숫자여도 대응 가능한지 확인 (문제에 해당 경우에 대한 예외처리 언급 없음)
    - : 중복된 이름이 여럿일 경우에도 대응 가능한 지 확인
    - : 판별 시 에러를 발생시키는지 확인
  - 자동차 이름, 횟수를 담은 배열 만들기 : 자동차 이름을 입력받았을 때, 목표한 자료구조를 반환하는 지 확인

  * 목표한 자료구조 형식은 후술

- 횟수 입력 받기 : 숫자를 반환하는지 확인

  - 입력받기(test생략)
  - 숫자가 아니라면 에러 발생 시키기 : 숫자가 아닌 값일 때 에러를 발생시키는지 확인

- 자동차 이동 시키기 :

  - 랜덤 숫자를 이용해 움직임 여부 결정하기 : 랜덤 숫자와 기준치를 이용해 올바르게 판별하는지 확인
  - 움직임 여부에 따라 올바르게 자료를 변형시키는지 확인

- 출력

  - 자동차 이름, 점수에 따라 문자열 생성하기 : 자동차 이름별로 올바른 메시지를
  - 출력하기(test생략)

- 우승자 출력하기
  - 우승자 가려내기 : 입력값에 따라 올바르게 우승자를 가려내는지 확인
    - : 다수의 우승자도 가려낼 수 있는지 확인
    - : 가장 멀리 간 사람이 우승자가 되는지 확인
  - 우승자 출력하기(test생략)
