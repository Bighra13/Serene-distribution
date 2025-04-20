import React from 'react';
import Page404 from './components/Page404';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('An unexpected error occurred:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Page404 />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
