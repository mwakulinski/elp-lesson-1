import { number } from "./index";
import { TurboNumber } from "./TurboNumber";

let turboNumber: TurboNumber;

beforeEach(() => {
  turboNumber = new TurboNumber(5);
});

describe("turboNumber tests", function () {
  it("should initiate an class instance", () => {
    expect(turboNumber).toBeTruthy;
  });

  it("should correctly return result value", () => {
    expect(turboNumber.result()).toBe(5);
  });

  it("should correctly sum numbers", () => {
    expect(turboNumber.add(4).result()).toBe(9);
  });

  it("should correctly subtract numbers", () => {
    expect(turboNumber.subtract(4).result()).toBe(1);
  });

  it("should correctly divide numbers", () => {
    expect(turboNumber.divide(2).result()).toBe(2.5);
  });

  it("should throw error when divided by 0", () => {
    expect(() => turboNumber.divide(0)).toThrow("You can not divide by 0");
  });

  it("should allow method chaining", () => {
    expect(turboNumber.subtract(5).divide(-1).result()).toBe(-0);
  });

  it("should correctly multiply numbers", () => {
    expect(turboNumber.multiply(8).result()).toBe(40);
  });

  it("should correctly power given number", () => {
    expect(turboNumber.power().result()).toBe(25);
  });
});
