/* eslint-disable operator-linebreak */
const getLocalStorage = () => {
  const items = localStorage.getItem('myBookValues');
  return items === null ? [] : JSON.parse(items);
};

export default getLocalStorage;
