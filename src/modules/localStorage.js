/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
export const updateLocalStorage = (arr) => {
  window.localStorage.setItem('projectList', JSON.stringify(arr));
};
