class NokiaTexter {
  constructor(private readonly text: string) {}
  squeeze(): string {
    const trimmedText = this.text.trim();

    if (this.notIncludesWhitespace(trimmedText)) return trimmedText;

    const squeezedText = trimmedText
      .split(" ")
      .filter(this.isNotEmptyString())
      .map(this.lowerCaseOddAndUpperCaseEvenWords())
      .join("");

    if (this.isToLong(squeezedText)) throw new Error("Sentance is to long");

    return squeezedText;
  }

  private isToLong(squeezedText: string) {
    return squeezedText.length > 160;
  }

  private notIncludesWhitespace(trimmedText: string) {
    return !trimmedText.includes(" ");
  }

  private lowerCaseOddAndUpperCaseEvenWords(): (
    value: string,
    index: number,
    array: string[]
  ) => string {
    return (word, index) => {
      return index % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
    };
  }

  private isNotEmptyString(): (
    value: string,
    index: number,
    array: string[]
  ) => boolean {
    return (word) => {
      return word !== "";
    };
  }
}

describe("NokiaTexter Test", () => {
  it("should correctly define class instance", () => {
    expect(new NokiaTexter("Hi it should work")).toBeDefined();
  });

  it("should return the same text when no spaces in text", () => {
    expect(new NokiaTexter(" Jaksiemasz ").squeeze()).toBe("Jaksiemasz");
  });

  it("should join words and camelcase text by words", () => {
    expect(new NokiaTexter("Jak sie masz").squeeze()).toBe("JAKsieMASZ");
  });

  it("should work with any doubled white spaces and white spaces before or after text", () => {
    expect(new NokiaTexter(" Jak  sie   masz  ").squeeze()).toBe("JAKsieMASZ");
  });

  it("should throw error when text after squeeze is longer than 160 characters", () => {
    expect(() =>
      new NokiaTexter(
        "nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes"
      ).squeeze()
    ).toThrow("Sentance is to long");
  });
});
