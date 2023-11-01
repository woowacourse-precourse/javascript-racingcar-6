# 구현 기능 목록

## 자동차 정보

- 랜덤값 >= 4 일 경우, 전진
  - MissionUtils 라이브러리 Random API 사용 (Random.pickNumberInRange)
- name : 이름
- movement : 전진 움직임

## 자동차 이름 입력

- 문구출력 "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  - MissionUtils 라이브러리 Console API 사용 (Console.print)
- 이름 입력 받기
  - MissionUtils 라이브러리 Console API 사용 (Console.readLineAsync)

## 시도 할 횟수 입력

- 문구출력 "시도할 횟수는 몇 회인가요?"
  - MissionUtils 라이브러리 Console API 사용 (Console.print)
- 시도할 횟수 입력 받기
  - MissionUtils 라이브러리 Console API 사용 (Console.readLineAsync)

## input 유효성 검사

- 이름 input 유효성 검사
  - 빈 값일 경우, throw문을 사용해 에러문구 출력 "[ERROR] 이름을 입력하세요."
  - 쉼표(,)로 이름을 구분하는지 체크
  - 5자를 초과할 경우, throw문을 사용해 에러문구 출력 "[ERROR] 이름은 5자 이하로 작성해주세요."

- 시도 할 횟수 input 유효성 검사
  - 빈 값일 경우 & 음수일 경우, throw문을 사용해 에러문구 출력 "[ERROR] 양수만 입력해주세요."

## 경주 및 각 차수별 실행결과 출력

- 전진 시, '-'로 표시
- 전진 시, 이름도 함께 출력
  - MissionUtils 라이브러리 Console API 사용 (Console.print)
  - 자동차이름 : -- 

## 경주 우승자 결정

- 우승자 계산
- 우승자 이름 출력
  - MissionUtils 라이브러리 Console API 사용 (Console.print)
  - 공동 우승일 경우, 쉼표(,)로 구분
  - 단독 우승자 안내 문구 출력 "최종 우승자 : 자동차이름"
  - 공동 우승자 안내 문구 출력 "최종 우승자 : 자동차이름1, 자동차이름2'
