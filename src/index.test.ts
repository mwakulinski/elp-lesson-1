import { number } from "./index";

describe("turboNumber tests", function () {
  class TurboNumber {
    constructor(private number: number) {}
    result(): number {
      return this.number;
    }
    add(numberToAdd: number) {
      this.number += numberToAdd;
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
});
