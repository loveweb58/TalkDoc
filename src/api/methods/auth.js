import apiCall from 'libs/apiCall';

export const registerUser = data => apiCall('/signup', data, 'POST', '');

export const loginUser = data => apiCall('/login', data, 'POST', '');

export const checkingEligibility = (data, token) =>
  apiCall('/check-eligibility', data, 'POST', token);

export const logoutUser = (data, token) =>
  apiCall('/logout', data, 'POST', token);
