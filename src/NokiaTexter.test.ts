class NokiaTexter {
  constructor(private readonly text: string) {}
}

describe("NokiaTexter Test", () => {
  it("should correctly define class instance", () => {
    expect(new NokiaTexter("Hi it should work")).toBeDefined();
  });
});
