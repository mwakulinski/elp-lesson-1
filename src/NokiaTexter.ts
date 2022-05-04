export class NokiaTexter {
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
