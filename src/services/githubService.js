export const apiURL = "https://api.github.com";

export const searchUserProfiles = (hint) => {
  return fetch(`${apiURL}/search/users?q=${hint}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
