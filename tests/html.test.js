import { describe, expect, it } from "@jest/globals";
import { encodeHTML } from "../src/common/html.js";

describe("Test html.js", () => {
  it("should test encodeHTML", () => {
    expect(encodeHTML(`<html>hello world<,.#4^&^@%!))`)).toBe(
      "&#60;html&#62;hello world&#60;,.#4^&#38;^@%!))",
    );
  });

  it("should encode quotes so values cannot leave an attribute", () => {
    expect(encodeHTML(`a" onload='x'`)).toBe("a&#34; onload=&#39;x&#39;");
  });

  it("should encode metacharacters that are followed by #", () => {
    expect(encodeHTML(`"#`)).toBe("&#34;#");
    expect(encodeHTML(`'#`)).toBe("&#39;#");
    expect(encodeHTML(`<#`)).toBe("&#60;#");
    expect(encodeHTML(`>#`)).toBe("&#62;#");
    expect(encodeHTML(`&#`)).toBe("&#38;#");
    expect(encodeHTML(`&#60;`)).toBe("&#38;#60;");
  });

  it("should keep non-ASCII text and remove backspace characters", () => {
    expect(encodeHTML("café 统计 통계\u0008")).toBe("café 统计 통계");
  });
});
