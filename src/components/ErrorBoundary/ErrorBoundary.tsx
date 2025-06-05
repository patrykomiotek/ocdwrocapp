import { Component, type ErrorInfo } from 'react';
import { Button } from 'ui/Button';

interface State {
  isError: boolean;
}

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  state = {
    isError: false,
  };

  // static getDerivedStateFromError(error) {
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // log to Sentry
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.isError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div>
          Boundary error{' '}
          <Button onClick={() => this.setState({ isError: false })}>Try again</Button>
        </div>
      );
    }
    return this.props.children;
  }
}
