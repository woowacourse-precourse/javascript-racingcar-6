1. 게임 시작
2. 경주할 자동차 이름 입력(쉼표 구분)
  2-1. 이름 5글자 초과, 공백일 경우 에러 발생하도록 함
3. 경주 횟수 정하기
  3-1. 숫자가 아닌 값이 들어가있거나 0이하 수가 들어가면 에러 발생. 소수점 들어간 경우 올림해서 계산 (2.4회 => 3회)
4. 랜덤 숫자를 돌려 4이상이면 전진, 아니면 그대로 있도록 함.
5. 이름과 값을 대입해야하니까 객체 적당할 듯. 실행 결과는 이름: '-'로 표현
6. 객체 value중 가장 긴 값을 찾아서 해당하는 길이가 있는 것들을 배열에 넣음
7. join 메서드를 이용해 승자를 알려주는 것으로 게임 종료.