import { Console } from "./console";

const text = "안녕";

describe("console test", () => {
  test("print test", () => {
    const printSpy = jest.spyOn(Console, "print").mockImplementation((msg) => msg);
    Console.print(text);
    expect(printSpy).toHaveBeenCalledWith(expect.stringContaining(text));
  });

  test("readLineSync test", async () => {
    readLineAsync = jest.fn();
    readLineAsync.mockImplementation(async () => text);
    const res = await readLineAsync();
    expect(res).toBe(text);
  });
});
