import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

const usersListMock = [
    {
      id: 1,
      login: "user1",
      avatar_url: "https://example.com/user1.jpg",
    },
    {
      id: 2,
      login: "user2",
      avatar_url: "https://example.com/user2.jpg",
    },
];

describe("UserList component", () => {
  test("renders a list of users", () => {
    render(<UserList users={usersListMock} />);

    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByText("user2")).toBeInTheDocument();
  });
});