import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
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

  describe("loading prop", () => {
    test("disables the search button and shows a loading indicator when the loading prop is true", () => {
        const mockOnSearch = jest.fn();
        render(
          <Search onSearch={mockOnSearch} loading={true} />
        );
      
        const searchButton = screen.getByText("Loading");
      
        expect(searchButton).toBeDisabled();
      });
    
      test("enables the search button and shows the 'Search' label when the loading prop is false", () => {
        const mockOnSearch = jest.fn();
        render(
          <Search onSearch={mockOnSearch} loading={false} />
        );
      
        const searchButton = screen.getByText("Search");
      
        expect(searchButton).not.toBeDisabled();
      });
  });
});
