import { add, sub } from "../";
import { helpers } from "../"; // DO: Helper module combines all the modules present in a file to a single object
// import * as helpers from "../"; // DON'T

describe("test positive flow", () => {
  it("should add given number", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(2, 3, 3)).toBe(8);
    expect(add(2, 3, 3, 2)).toBe(10);
  });
  it("should subtract given number", () => {
    expect(sub(3, 2)).toBe(1);
    expect(sub(6, 2, 1)).toBe(3);
    expect(sub(7, 2, 4)).toBe(1);
  });
});

describe("spy and mock real fn", () => {
  it("should spy add and return a updated value", () => {
    jest.spyOn(helpers, "add").mockReturnValue(1);
    expect(helpers.add(2, 3, 3)).toBe(1);
    // expect(add(2, 3, 3)).toBe(1); // THIS STILL FAILS
    expect(helpers.add(2, 3, 3)).toBe(1); // changed consumption from add to helpers.add
  });
  it("should spy sub and return a updated value", () => {
    jest.spyOn(helpers, "sub").mockReturnValue(2);
    expect(helpers.sub(6, 2, 1)).toBe(2);
    // expect(sub(2, 3)).toBe(2); THIS STILL FAILS
    expect(helpers.sub(2, 3)).toBe(2); // changed consumption from add to helpers.sub
  });
});

// Motivation behind writing below test cases:
// Assume add and sub are Fetch API call which are being invoked in a specific scenario
// We are spying the methods, and on a specific condition checking weather the spy was correctly invoked
describe("DESIRED FLOW: ==>", () => {
  it("SHOULD spy add CHECK IF THE FUNCTION WAS CALLED", () => {
    const spyAddFn = jest.spyOn(helpers, "add");
    helpers.add(1, 2);
    expect(spyAddFn).toHaveBeenCalled();
  });
  it("should spy add and return a fix value", () => {
    const spySubFn = jest.spyOn(helpers, "sub");
    helpers.sub(3, 2);
    expect(spySubFn).toHaveBeenCalled();
  });
});
