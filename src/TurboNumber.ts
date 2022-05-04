export class TurboNumber {
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
