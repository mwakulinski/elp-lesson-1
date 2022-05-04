class NokiaTexter {
  constructor(private readonly text: string) {}
  squeeze(): string {
    return this.text;
  }
}

describe("NokiaTexter Test", () => {
  it("should correctly define class instance", () => {
    expect(new NokiaTexter("Hi it should work")).toBeDefined();
  });

  it("should return the same text when text has no white spaces", () => {
    expect(new NokiaTexter("Jaksiemasz").squeeze()).toBe("Jaksiemasz");
  });
});
