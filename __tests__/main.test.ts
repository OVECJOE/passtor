import PasswordGenerator from "../src/main.js";

describe("PasswordGenerator", () => {
  test("should generate a password with default options", () => {
    const generator = new PasswordGenerator();
    const password = generator.generate();

    expect(password.length).toBe(16);
    expect(generator.options.uppercase).toBe(true);
    expect(generator.options.lowercase).toBe(true);
    expect(generator.options.numbers).toBe(true);
    expect(generator.options.symbols).toBe(true);
  });

  test("should generate a password with custom options", () => {
    const generator = new PasswordGenerator({
      length: 8,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false
    });

    const password = generator.generate();

    expect(password.length).toBe(8);
    expect(generator.options.uppercase).toBe(false);
    expect(generator.options.lowercase).toBe(false);
    expect(generator.options.numbers).toBe(false);
    expect(generator.options.symbols).toBe(false);
  });

  test("should return a string representation of the password", () => {
    const generator = new PasswordGenerator();
    const password = generator.generate();

    expect(typeof password.toString()).toBe("string");
  });
});
