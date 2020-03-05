const updateLocalStorage = (arr) => {
  window.localStorage.setItem('projectList', JSON.stringify(arr));
};

module.exports = { updateLocalStorage, default: updateLocalStorage };
