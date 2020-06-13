import Cookies from 'universal-cookie';

export const tokenName = 'jwtToken';

export const getToken = () => {
  const cookies = new Cookies();
  return cookies.get(tokenName);
};

export const setToken = token => {
  const cookies = new Cookies();
  cookies.set(tokenName, token);
};

export const removeToken = () => {
  const cookies = new Cookies();
  cookies.remove(tokenName);
};
