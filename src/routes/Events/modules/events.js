import { createAction } from 'redux-actions';

const SET_EVENT_DATA = 'SET_EVENT_DATA';
const INIT_EVENT_DATA = 'INIT_EVENT_DATA';

export const doSetEventData = createAction(SET_EVENT_DATA);
export const initEventData = createAction(INIT_EVENT_DATA);
export const setEventData = ({ key, value }) => (dispatch, getState) => {
  const { router: { location: { pathname } } } = getState();
  dispatch(doSetEventData({
    path: pathname,
    key,
    value,
  }));
};

export const initialState = {
};

const handlers = {
  [SET_EVENT_DATA]: (state, { payload: { path, key, value } }) => ({
    ...state,
    [path]: {
      ...state[path],
      [key]: value,
    },
  }),
  [INIT_EVENT_DATA]: (state, { payload }) => ({
    [payload]: {},
    ...state,
  }),
};

export const eventsReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
