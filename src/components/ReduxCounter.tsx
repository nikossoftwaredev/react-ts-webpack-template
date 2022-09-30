import { Button } from 'antd';
import useUiResource from 'hooks/useUiResource';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUIProperty } from 'redux/slices/uiSlice';

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
    <div>
      <Button onClick={changeCounter(-1)}>-</Button>
      <span style={{ color: 'blue' }}>{counter}</span>
      <Button onClick={changeCounter(1)}>+</Button>
    </div>
  );
};

export default ReduxCounter;
