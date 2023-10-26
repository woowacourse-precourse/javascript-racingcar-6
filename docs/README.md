# 우테코 프리코스 Week 2 - 자동차 경주

## ✅ Feature Check List

- [ ] 게임 준비
  - [ ] 경주 자동차 입력 및 Validation (이름은 5자 이하 / 각 자동차는 쉼표로 구분)
  - [ ] 경주 시도 횟수 입력 및 Validation
  - [ ] 입력된 값이 잘못된 경우 `throw`문으로 에러 처리
- [ ] 자동차 전진 및 정지 구현
  - [ ] 0-9 사이의 숫자 중 무작위 숫자 추출
  - [ ] 추출된 값이 4 이상일 때 전진(move) / 3 이하일 때 정지(stop)
  - [ ] 경주 시도 횟수만큼 반복
- [ ] 실행 결과 및 우승자 출력
  - [ ] 각 회차마다 실행 결과를 각 자동차 별로 출력
  - [ ] 가장 많이 전진한 자동차를 우승자로 구분 (이 때, 우승자는 복수일 수 있음)

## ✅ Details Check List

- [ ] Airbnb-Style Code Convention 확인
  - Eslint / Prettier 작동 확인
- [ ] `max-depth` 확인
  - depth가 2를 초과하지 않도록 할 것
  - `eslintrc.cjs` 파일에 설정 추가할 것
- [ ] Jest 활용하여 테스트 코드 작성 및 정상 동작 확인 
  - `__tests__/StringTest.js` 참고

---

## ✅ Commit Convention
- **[커밋 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 확인할 것**
```
<type>(<scope>): <subject>
    <빈 줄>
<body>
    <빈 줄>
<footer>
```

- **`<type>`**
  - feat : 기능 추가
  - fix : 버그 수정
  - docs : 문서 (*.md 등) 추가 및 수정
  - style : formatting, 세미콜론 수정 등 코드 스타일 수정
  - refactor : 코드 리팩토링
  - test : 테스트 코드 작성 / 리팩토링 테스트 코드 수정
  - chore : 빌드 설정, 패키지 변경 등 기타 수정

- **`<subject>`**
  - **커밋 제목**
  - 변경 사항에 대한 간결한 설명 작성
  - 명령형 혹은 현재 시제로 작성
  - 영어로 작성할 경우 대문자를 사용하지 않음
  - 마침표를 사용하지 않음

- **`<scope>`**
  - 커밋 변경 위치
  - `$location`, `$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, ...
  - scope는 AngularJS 에서 사용하는 개념으로 프리코스 미션에서는 모듈/패키지를 기재하거나 생략

- **`<body>`**
  - 명령형 혹은 현재 시제로 작성
  - 변경된 내용에 대해 이전 코드와 비교하여 변경점 작성

- **`<footer>`**
  - 선택적으로 작성
  - 주요한 변경사항이 있을 경우에 footer에 기재
  - 발생 이슈에 대한 커밋 작성 시: `Closes #issueNumber`