const rover = require("./rover.js");

describe("mars rover", () => {
  it("returns the initial position and direction when no commands are given", () => {
    const x = 5;
    const y = 7;
    const direction = "N";
    const result = rover({ x, y, direction })("");
    expect(result.x).toBe(x);
    expect(result.y).toBe(y);
    expect(result.direction).toBe(direction);
  });

  it("returns the initial position and west direction when left is passed as a command for a north facing rover", () => {
    const x = 5;
    const y = 7;
    const direction = "N";
    const result = rover({ x, y, direction })("L");
    expect(result.x).toBe(x);
    expect(result.y).toBe(y);
    expect(result.direction).toBe("W");
  });

  it("returns the initial position and south direction when left is passed as a command for a west facing rover", () => {
    const x = 5;
    const y = 7;
    const direction = "W";
    const result = rover({ x, y, direction })("L");
    expect(result.x).toBe(x);
    expect(result.y).toBe(y);
    expect(result.direction).toBe("S");
  });

  it("returns the initial position and east direction when right is passed as a command for a north facing rover", () => {
    const x = 5;
    const y = 7;
    const direction = "N";
    const result = rover({ x, y, direction })("R");
    expect(result.x).toBe(x);
    expect(result.y).toBe(y);
    expect(result.direction).toBe("E");
  });

  it("returns the initial position and direction when turning left and turning right", () => {
    const initial = {
      x: 5,
      y: 7,
      direction: "N"
    };
    const result = rover(initial)("LR");
    expect(result).toEqual(initial);
  });

  it("returns south position when turning left twice from north facing rover", () => {
    const x = 5;
    const y = 7;
    const direction = "N";
    const result = rover({ x, y, direction })("LL");
    expect(result).toEqual({ x, y, direction: "S" });
  });

  it("throws an error when getting a command that does not exist", () => {
    const x = 5;
    const y = 7;
    const direction = "N";
    expect(() => rover({ x, y, direction })("LLK")).toThrow();
  });

  it("returns a northern position and same direction when going forward", () => {
    const x = 5;
    const y = 7;
    const direction = "N";
    const result = rover({ x, y, direction })("FLLLLF");
    expect(result.x).toBe(x);
    expect(result.y).toBe(y - 2);
    expect(result.direction).toBe("N");
  });
});
