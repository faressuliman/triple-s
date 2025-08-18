import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import NotFound from '../pages/NotFound';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <NotFound />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
