import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import appConfig from './../../../config/application.config';

const history = useRouterHistory(createHistory)({
  basename: appConfig.path,
});

export default history;
