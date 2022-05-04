import { number } from "./index";

describe("turboNumber tests", function () {
  class TurboNumber {
    constructor(private readonly number: number) {}
    result(): number {
      return this.number;
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
});
