import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calculator from "./Calculator";
import add from "./utils/StringCalculator";

jest.mock("./utils/StringCalculator", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Calculator Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the calculator form", () => {
    render(<Calculator />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Please enter numbers separated by commas or newlines")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Calculate" })).toBeInTheDocument();
  });

  test("displays the result when valid input is provided", () => {
    (add as jest.Mock).mockReturnValue(10);

    render(<Calculator />);
    const input = screen.getByPlaceholderText(
      "Please enter numbers separated by commas or newlines"
    );
    const button = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(input, { target: { value: "1,2,3,4" } });
    fireEvent.click(button);

    expect(screen.getByText("Sum: 10")).toBeInTheDocument();
  });

  test("displays an error message when invalid input is provided", () => {
    (add as jest.Mock).mockImplementation(() => {
      throw new Error("Negatives not allowed: -1");
    });

    render(<Calculator />);
    const input = screen.getByPlaceholderText(
      "Please enter numbers separated by commas or newlines"
    );
    const button = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(input, { target: { value: "1,-1" } });
    fireEvent.click(button);

    expect(screen.getByText("Error: Negatives not allowed: -1")).toBeInTheDocument();
  });

  test("clears the result and error messages when input changes", () => {
    (add as jest.Mock).mockReturnValue(10);

    render(<Calculator />);
    const input = screen.getByPlaceholderText(
      "Please enter numbers separated by commas or newlines"
    );
    const button = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(input, { target: { value: "1,2,3,4" } });
    fireEvent.click(button);

    expect(screen.getByText("Sum: 10")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "" } });

    expect(screen.queryByText("Sum: 10")).not.toBeInTheDocument();
    expect(screen.queryByText("Error:")).not.toBeInTheDocument();
  });
});
