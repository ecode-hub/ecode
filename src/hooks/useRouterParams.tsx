import { useHistory } from 'react-router-dom';
import { parseQueryString } from '@utils';
import { useMemo } from 'react';

const useRouterParams = (): any => {
  const history = useHistory();
  const param = useMemo(()=>parseQueryString(history.location.search), [history]);
  return param;
};

export {
  useRouterParams
};