export const validateCountChildren = (e) => {
  return (e.target.value = e.target.value.replace(/[^ 0-9+()]/g, ''));
};