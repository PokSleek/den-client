import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import BaseLayout from './components/organisms/base-layout';
import store from './store/store';

interface IHelloMessageProps {
    name: string;
}

class HelloMessage extends React.Component<IHelloMessageProps> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BaseLayout header={'React'} />
    </Provider>,
    document.getElementById('root'),
);
