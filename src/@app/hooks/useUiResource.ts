import isEqual from 'lodash/isEqual';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUiResource, setUIProperty } from '@app/redux/slices/uiSlice';
import { AppState } from '@app/redux/store';

const useUiResource = (path: string, initData?: any): any => {
  const dispatch = useDispatch();

  const resource =
    useSelector((state: AppState) => getUiResource(state, path), isEqual) || initData;

  useEffect(() => {
    if (initData) {
      dispatch(
        setUIProperty({
          path,
          value: initData,
          initialize: true
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return resource;
};

export default useUiResource;
