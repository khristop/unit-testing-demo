import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search Tests", () => {
  test("updates the input field value as the user types", () => {
    const mockOnSearch = jest.fn();
    render(
      <Search onSearch={mockOnSearch} />
    );

    const searchInput = screen.getByPlaceholderText("Search for a user");

    fireEvent.change(searchInput, { target: { value: "octocat" } });

    expect(searchInput.value).toBe("octocat");
  });

  test("calls the onSearch prop with the search query when the form is submitted", () => {
    const mockOnSearch = jest.fn();
    render(<Search onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText("Search for a user");
    const searchButton = screen.getByText("Search");

    fireEvent.change(searchInput, { target: { value: "testing user" } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("testing user");
  });
});
