import React from 'react';
import { connect } from 'react-redux';

import { setHeader } from '../../../store/actions/actionCreators';
import Calendar from '../../molecules/Calendar';

import './baseLaoyout.scss';

class BaseLayout extends React.Component<never, never> {
    render() {
        return <Calendar />;
    }
}

export default connect(
    (state: { main: any }) => ({
        header: state.main.header,
    }),
    { setHeader },
)(BaseLayout);
