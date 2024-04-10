import { ATM } from "../src/atm";

describe("ATM withdrawal test", () => {
  test("should return an empty string when withdrawing 0", () => {
    const machine = new ATM({
      500: 2,
      200: 3,
      100: 5,
      50: 12,
      20: 20,
      10: 50,
      5: 100,
      2: 250,
      1: 500,
    });

    expect(machine.withdraw(0)).toEqual("");
  });

  it.each([
    [0, ""],
    [20, "1 bill of 20.\n"],
    [30, `1 bill of 20.\n1 bill of 10.\n`],
    [
      1725,
      `2 bills of 500.\n3 bills of 200.\n1 bill of 100.\n1 bill of 20.\n1 bill of 5.\n`,
    ],
    [434, `2 bills of 200.\n1 bill of 20.\n1 bill of 10.\n2 coins of 2.\n`],
    [
      433,
      `2 bills of 200.\n1 bill of 20.\n1 bill of 10.\n1 coin of 2.\n1 coin of 1.\n`,
    ],
  ])(
    "when %p requested, should return %p ",
    (input: number, expectedOutput: string) => {
      const machine = new ATM({
        500: 2,
        200: 3,
        100: 5,
        50: 12,
        20: 20,
        10: 50,
        5: 100,
        2: 250,
        1: 500,
      });

      expect(machine.withdraw(input)).toEqual(expectedOutput);
    }
  );
});

describe.skip("Tests ATM for persistance of state of ATM between withdrawals", () => {
  const setupATM = () => {
    return new ATM({
      500: 2,
      200: 3,
      100: 5,
      50: 12,
      20: 20,
      10: 50,
      5: 100,
      2: 250,
      1: 500,
    });
  };

  test("should return an empty string when withdrawing 0", () => {
    const machine = setupATM();

    expect(machine.withdraw(0)).toEqual("");
  });

  it.each([
    [
      1725,
      `2 bills of 500.\n3 bills of 200.\n1 bill of 100.\n1 bill of 20.\n1 bill of 5.\n`,
    ],
    [
      1825,
      `4 bills of 100.\n12 bills of 50.\n19 bills of 20.\n44 bills of 10.\n1 bill of 5.\n`,
    ],
    // Add more test cases as needed
  ])(
    "when %p requested, should return %p ",
    (input: number, expectedOutput: string) => {
      const machine = setupATM();

      expect(machine.withdraw(input)).toEqual(expectedOutput);
    }
  );
});
