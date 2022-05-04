import { number } from "./index";

describe("turboNumber tests", function () {
  class TurboNumber {
    constructor(private readonly number: number) {}
  }

  it("should initiate an class instance", () => {
    const turboNumber = new TurboNumber(1);
    expect(turboNumber).toBeTruthy;
  });
});
