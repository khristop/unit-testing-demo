import { searchUserProfiles, apiURL } from "./githubService";

describe("searchUserProfiles", () => {
  let originalFetch;

  beforeAll(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("searchUserProfiles(hint: string): calls the fn with a given hint", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({ json: () => {} })
    );
    global.fetch = mockFetch;

    const hint = "test";
    await searchUserProfiles(hint);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${apiURL}/search/users?q=test`);
  });

  test("searchUserProfiles(hint: string): returns the JSON response if the request is successful", async () => {
    const jsonResponse = [{ id: 1, name: "Testing user" }];
    const mockFetch = jest.fn(() =>
      Promise.resolve({ json: () => jsonResponse })
    );
    global.fetch = mockFetch;

    const result = await searchUserProfiles("test");

    expect(result).toEqual(jsonResponse);
  });

  test("searchUserProfiles(hint: string): logs an error message and returns undefined if the request fails", async () => {
    const mockError = new Error("Network error");
    const mockFetch = jest.fn(() => Promise.reject(mockError));
    global.fetch = mockFetch;

    const consoleSpy = jest.spyOn(console, "log");

    const result = await searchUserProfiles("test");

    expect(consoleSpy).toHaveBeenCalledWith(mockError);
    expect(result).toBeUndefined();
  });
});