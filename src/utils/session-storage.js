export const isSessionStorage = (stateName) => {
    const movies = sessionStorage.getItem(stateName);
    return sessionStorage && JSON.parse(movies);
};
  