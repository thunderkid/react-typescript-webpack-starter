import { assert } from "chai";
import { addition } from "/home/adrian/CodeLabs/webpackReactTypescriptLab/src/calculator";

describe("Calculator Tests", () => {
      it("should return 5 when 2 is added to 3", () => {
      const result = addition(2, 3);
      assert.equal(result, 5);
   });
});