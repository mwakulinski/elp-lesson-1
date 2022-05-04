import { number } from "./index";

class TurboNumber {
  constructor(private number: number) {}
  result(): number {
    return this.number;
  }
  add(numberToAdd: number) {
    this.number += numberToAdd;
    return this;
  }
  subtract(numberToSubtract: number) {
    this.number -= numberToSubtract;
    return this;
  }
  divide(divider: number) {
    if (divider === 0) throw new Error("You can not divide by 0");
    this.number /= divider;
    return this;
  }
}

let turboNumber: TurboNumber;

beforeEach(() => {
  turboNumber = new TurboNumber(1);
});

describe("turboNumber tests", function () {
  it("should initiate an class instance", () => {
    expect(turboNumber).toBeTruthy;
  });

  it("should correctly return result value", () => {
    expect(turboNumber.result()).toBe(1);
  });

  it("should correctly sum numbers", () => {
    turboNumber.add(4);
    expect(turboNumber.result()).toBe(5);
  });

  it("should correctly subtract numbers", () => {
    turboNumber.subtract(4);
    expect(turboNumber.result()).toBe(-3);
  });

  it("should correctly divide numbers", () => {
    turboNumber.divide(2);
    expect(turboNumber.result()).toBe(0.5);
  });

  it("should throw error when divided by 0", () => {
    expect(() => turboNumber.divide(0)).toThrow("You can not divide by 0");
  });

  it("should allow method chaining", () => {
    expect(turboNumber.subtract(5).divide(-1).result()).toBe(4);
  });
});
