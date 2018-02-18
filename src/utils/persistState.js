const STATE_KEY = '@@State';

export const loadState = (transformer = s => s) => {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return transformer(JSON.parse(serializedState));
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state = {}) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (e) {
    // ...
  }
};
