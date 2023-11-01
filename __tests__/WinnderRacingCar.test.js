import Computer from '../src/Computer';
describe('test evalRacing method in Computer', () => {
  test.each([
    {
      input: [
        { name: 'a', position: 0 },
        { name: 'b', position: 0 },
        { name: 'c', position: 4 },
        { name: 'd', position: 2 },
      ],
      expected: 'c',
    },
    {
      input: [
        { name: 'a', position: 2 },
        { name: 'b', position: 4 },
        { name: 'c', position: 4 },
        { name: 'd', position: 1 },
      ],
      expected: 'b, c',
    },
  ])('최종 우승자 : expected', ({ input, expected }) => {
    // given
    const calculator = Computer.createComputer();
    // when
    const result = calculator.evalRacing(input);
    // then
    expect(result).toBe(expected);
  });
});
