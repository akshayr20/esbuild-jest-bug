import { add, sub } from "../";
import * as helpers from "../";

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

describe("test negative flow, this test would fail (added a workaround to fix them)", () => {
  it("should spy add and return a fix value", () => {
    const helperFn = { add: helpers.add };
    jest.spyOn(helperFn, "add").mockReturnValue(1);
    // Pointing at correct point in memory
    expect(helperFn.add(2, 3, 3)).toBe(1);
    // Pointing at incorrect point in memory, directly consuming from the file
    // Reason for such usage is discussed in last test suite
    // Fails: ==> expect(add(2, 3, 3)).toBe(1);
  });
  it("should spy add and return a fix value", () => {
    const helperFn = { sub: helpers.sub };
    jest.spyOn(helperFn, "sub").mockReturnValue(2);
    // Pointing a correct point in memory
    expect(helperFn.sub(6, 2, 1)).toBe(2);
    // Pointing at incorrect point in memory, directly consuming from the file
    // Reason for such usage is discussed in last test suite
    // Fails: ==> expect(sub(2, 3, 3)).toBe(2);
  });
});

// Motivation behind writing below test cases:
// Assume add and sub are Fetch API call which are being invoked in a specific scenario
// We are spying the methods, and on a specific condition checking weather the spy was correctly invoked
describe("DESIRED FLOW: ==>", () => {
  it("SHOULD spy add CHECK IF THE FUNCTION WAS CALLED", () => {
    const helperFn = { add: helpers.add };
    const spyAddFn = jest.spyOn(helperFn, "add");
    // points at incorrect point in memory
    helpers.invokeAdd();
    expect(spyAddFn).toHaveBeenCalled();
  });
  it("should spy add and return a fix value", () => {
    const helperFn = { sub: helpers.sub };
    const spySubFn = jest.spyOn(helperFn, "sub");
    // points at incorrect point in memory
    helpers.invokeSub();
    expect(spySubFn).toHaveBeenCalled();
  });
});
