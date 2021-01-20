import React from 'react';
import { connect } from 'react-redux';

import { setHeader } from '../../../store/actions/actionCreators';

let counter = 0;

class BaseLayout extends React.Component<any, any> {
  private readonly intervalId: NodeJS.Timeout;
  constructor(props: any) {
    super(props);

    this.intervalId = setInterval(() => {
      this.props.setHeader(counter++)
      console.log(this.props)
    },1000)

    setTimeout(() => clearInterval(this.intervalId), 5000)
  }

  render() {
    return <h1>Hi, {this.props.header}</h1>
  }
}

export default connect(
  (state: { main: any; }) => ({
      header: state.main.header
    }),
  { setHeader }
)(BaseLayout)
