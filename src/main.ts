import { POptions } from "./types.js";

class PasswordGenerator {
  private readonly _options = {
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  }

  public get options(): Readonly<POptions> {
    return this.options;
  }

  constructor(options?: Partial<POptions>) {
    Object.assign(this._options, options);
  }

  private get ascii(): string {
    let ascii = "";

    if (this._options.uppercase) {
      ascii += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (this._options.lowercase) {
      ascii += "abcdefghijklmnopqrstuvwxyz";
    }

    if (this._options.numbers) {
      ascii += "0123456789";
    }

    if (this._options.symbols) {
      ascii += "!@#$%^&*()_+-=[]{};:,.<>?";
    }

    // shuffle the ascii characters
    ascii = ascii.split("").sort(() => Math.random() - 0.5).join("");

    return ascii;
  }

  private get randomIndex(): number {
    return Math.floor(Math.random() * this.ascii.length);
  }

  private get randomChar(): string {
    return this.ascii[this.randomIndex];
  }

  public generate(): string {
    const password = new Array(this._options.length);

    for (let i = 0; i < this._options.length; i++) {
      password[i] = this.randomChar;
    }

    return password.join("");
  }
}

export default PasswordGenerator;
