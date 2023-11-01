import determineWinner from '../src/modules/outputs/determineWinner';

describe('최종 우승자 판별 테스트', () => {
  test('최종 우승자가 한 명일 때 테스트', async () => {
    // given
    const input = ['pobi : --------', 'minji : ----', 'java : --', 'new : -----'];

    // when
    const output = await determineWinner(input);

    // then
    expect(output).toEqual(['pobi : --------']);
  });

  test('최종 우승자가 2명 이상일 때 테스트', async () => {
    // given
    const input = ['pobi : --------', 'minji : --------', 'java : --------', 'new : -----'];

    // when
    const output = await determineWinner(input);

    // then
    expect(output).toEqual(['pobi : --------', 'minji : --------', 'java : --------']);
  });
});
