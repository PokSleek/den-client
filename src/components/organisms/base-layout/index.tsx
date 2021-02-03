import React from 'react';
import { connect } from 'react-redux';

import { setHeader } from '../../../store/actions/actionCreators';
import Calendar from '../../molecules/Calendar';

import './baseLaoyout.scss';

class BaseLayout extends React.Component {
    render() {
        return (
            <div className={'base-wrapper'}>
                <div className={'base-layout'}>
                    <Calendar />
                </div>
            </div>
        );
    }
}

export default connect(
    (state: { main: any }) => ({
        header: state.main.header,
    }),
    { setHeader },
)(BaseLayout);
