export const updateLocalStorage = (arr) => {
  window.localStorage.setItem('projectList', JSON.stringify(arr));
};
