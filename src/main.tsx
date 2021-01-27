import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import BaseLayout from './components/organisms/base-layout';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <BaseLayout header={'React'} />
    </Provider>,
    document.getElementById('root'),
);
