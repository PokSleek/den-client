import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IHelloMessageProps {
    name: string;
}

class HelloMessage extends React.Component<IHelloMessageProps> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name={'React'} />, document.getElementById('root'));
