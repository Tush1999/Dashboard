import React, { Component } from "react";

const ErrorFallback = () => (
  <div>
    <h1>Something went wrong!</h1>
  </div>
);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    return this.state.hasError ? <ErrorFallback /> : children;
  }
}

export default ErrorBoundary;
