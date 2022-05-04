class NokiaTexter {
  constructor(private readonly text: string) {}
  squeeze(): string {
    return this.text
      .split(" ")
      .map((word, index) => {
        return index % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
      })
      .join("");
  }
}

describe("NokiaTexter Test", () => {
  it("should correctly define class instance", () => {
    expect(new NokiaTexter("Hi it should work")).toBeDefined();
  });

  it("should return the same text when text has no white spaces", () => {
    expect(new NokiaTexter("Jaksiemasz").squeeze()).toBe("Jaksiemasz");
  });

  it("should join words and camelcase text by words", () => {
    expect(new NokiaTexter("Jak sie masz").squeeze()).toBe("JAKsieMASZ");
  });
});
