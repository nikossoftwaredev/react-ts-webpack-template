import { Component, ErrorInfo, ReactNode } from 'react';
import Stack from '@mui/material/Stack';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error | null;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  public render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Stack>
          <h1>Sorry.. there was an error</h1>
          {error && <p>{error.message}</p>}
          {errorInfo && <p>{errorInfo.componentStack}</p>}
        </Stack>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
