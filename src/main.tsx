import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import 'normalize.css';

import BaseLayout from './components/organisms/base-layout';
import store from './store/store';

moment.locale('ru');

ReactDOM.render(
    <Provider store={store}>
        <BaseLayout header={'React'} />
    </Provider>,
    document.getElementById('root'),
);
