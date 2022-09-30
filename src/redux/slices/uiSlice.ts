import { createSlice, Dispatch, current } from '@reduxjs/toolkit';
import get from 'lodash/get';
import setWith from 'lodash/setWith';
import { ResetUIDataPayload, SetUIDataAction, SliceState } from 'types/redux';

const initialState: SliceState = {};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setUIProperty(state: SliceState, action: SetUIDataAction) {
      const { path, value, initialize } = action.payload;
      const finalPath = path.replace(/\//g, '.');
      const prevState = get(state, finalPath);

      if (initialize && prevState == null) {
        setWith(state, finalPath, value, Object);
      }
    },
    setUIData(state: SliceState, action: SetUIDataAction) {
      const { path, value, index } = action.payload;
      const finalPath = path.replace(/\//g, '.');

      // Prev state with current is immutable, state on the other hand is a proxy of the actual immutable object
      const prevState = get(current(state), finalPath, value instanceof Array ? [] : {});

      if (index != null && prevState[index]) {
        const newValue = get(state, finalPath, value instanceof Array ? [] : {});
        newValue[index] = value;

        setWith(state, finalPath, newValue, Object);
      } else {
        setWith(
          state,
          finalPath,
          value instanceof Array ? [...prevState, ...value] : { ...prevState, ...value },
          Object
        );
      }
    },
    deleteUIData() {
      return {};
    }
  }
});

export const { setUIProperty, setUIData, deleteUIData } = uiSlice.actions;

export const resetUIData =
  (payload: ResetUIDataPayload) =>
  (dispatch: Dispatch, getState: any): void => {
    const state = getState();
    const { path, value } = payload;

    const api = get(state.api, path.replace(/\//g, '.'));
    dispatch(setUIData({ path, value: api || value }));
  };

export const getUiResource = (state: SliceState, path: string): any => {
  return get(state.ui, path.replace(/\//g, '.'));
};

export default uiSlice.reducer;
