import { createAction } from 'redux-actions';

const SET_CONFIG = 'SET_CONFIG';

export const setConfig = createAction(SET_CONFIG);

export const initialState = {
  locale: 'en',
};

const handlers = {
  [SET_CONFIG]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
};

export const configReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
