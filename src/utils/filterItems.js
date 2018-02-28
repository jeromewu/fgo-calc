export default data => ({ id }) => {
  if (
    data['filter/gem'] === true &&
    id.search(/shinning.gem|magic.gem|secret.gem/) !== -1
  ) {
    return false;
  } else if (
    data['filter/pm'] === true &&
    id.search(/(piece|monument)$/) !== -1
  ) {
    return false;
  }
  return true;
};
