## 🏎 구현할 기능 목록

1. 자동차들의 **이름** 입력 기능
   - 쉼표(`,`)를 기준으로 구분
   - 5자 이하만 가능
   - `@woowacourse/mission-utils`의 `Console.readLineAsync` 활용
2. **이동 횟수** 입력 기능
3. 각 자동차의 전진 또는 정지 기능
   - 이동 횟수만큼 반복 실행
   - 0 ~ 9 사이에서 무작위 값을 구한 후 그 값이 **4 이상일 경우에만 전진 가능**
   - `@woowacourse/mission-utils`의 `Random.pickNumberInRange()` 활용
4. 각 차수별 실행 결과 출력 기능
   - 입력한 순서대로 자동차 이름과 진행 상황을 함께 출력
   - `@woowacourse/mission-utils`의 `Console.print` 활용
5. 우승자 안내 문구 출력 기능
   - 우승자가 2명 이상일 경우 쉼표(`,`)를 이용하여 구분
6. 예외 처리 기능
   - 사용자가 잘못된 값 입력 시, `throw`문을 사용해 예외 발생시킨 후 애플리케이션 종료
   - 예외 상황에 따라 에러 문구 분류
