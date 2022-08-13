import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import { Toolbar } from "../src/components/toolbar";
import { printExternal } from "../src/lib/util";

jest.mock("../src/lib/util", () => ({
  printExternal: jest.fn(),
}));

it("Uses the correct print url", () => {
  act(() => {
    render(<Toolbar setTheme={() => {}} />);
  });
  const printIcon = document.getElementsByClassName("icon-print")[0];
  fireEvent.click(printIcon);
  const printCallArgs = printExternal.mock.calls[0];
  expect(printCallArgs[0]).toBe("https://grinspins.github.io/resume.html");
});
