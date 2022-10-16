import useUiResource from 'hooks/useUiResource';
import { IconButton } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUIProperty } from 'redux-app/slices/uiSlice';
import { Stack } from '@mui/system';

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useUiResource('counter', 0);

  const changeCounter = useCallback(
    (multiplyValue: 1 | -1) => () => {
      dispatch(setUIProperty({ path: 'counter', value: counter + 1 * multiplyValue }));
    },
    [counter, dispatch]
  );

  return (
    <Stack>
      <IconButton onClick={changeCounter(-1)}>-</IconButton>
      <span style={{ color: 'blue' }}>{counter}</span>
      <IconButton onClick={changeCounter(1)}>+</IconButton>
    </Stack>
  );
};

export default ReduxCounter;
