export const isSessionStorage = (stateName:string) => {
    const movies:any = sessionStorage.getItem(stateName);
    return sessionStorage && JSON.parse(movies);
};
  