declare module "@woowacourse/mission-utils" {
  class Random {
    static pickNumberInRange(
      startInclusive: number,
      endInclusive: number
    ): number;
  }
  class Console {
    static print(messages: any): void;
    static readLineAsync(query: string): Promise<string>;
  }
}
