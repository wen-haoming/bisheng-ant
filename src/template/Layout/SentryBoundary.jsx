import React, { Component } from 'react';

export default class SentryBoundary extends Component {
  state = { error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });

  }

  render() {
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      // render fallback UI
      return <div></div>
    }
    // when there's not an error, render children untouched
    return children;
  }
}
