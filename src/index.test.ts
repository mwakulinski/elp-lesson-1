import { number } from "./index";

describe("turboNumber tests", function () {
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

  it("should initiate an class instance", () => {
    const turboNumber = new TurboNumber(1);
    expect(turboNumber).toBeTruthy;
  });

  it("should correctly return result value", () => {
    const turboNumber = new TurboNumber(1);
    expect(turboNumber.result()).toBe(1);
  });

  it("should correctly sum numbers", () => {
    const turboNumber = new TurboNumber(1);
    turboNumber.add(4);
    expect(turboNumber.result()).toBe(5);
  });

  it("should correctly subtract numbers", () => {
    const turboNumber = new TurboNumber(1);
    turboNumber.subtract(4);
    expect(turboNumber.result()).toBe(-3);
  });

  it("should correctly divide numbers", () => {
    const turboNumber = new TurboNumber(1);
    turboNumber.divide(2);
    expect(turboNumber.result()).toBe(0.5);
  });

  it("should throw error when divided by 0", () => {
    const turboNumber = new TurboNumber(1);
    expect(() => turboNumber.divide(0)).toThrow("You can not divide by 0");
  });

  it("should allow method chaining", () => {
    const turboNumber = new TurboNumber(17);
    expect(turboNumber.subtract(5).divide(-3).result()).toBe(-4);
  });
});
