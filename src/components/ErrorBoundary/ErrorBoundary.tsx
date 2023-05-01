import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryProps } from './types';

const ErrorBoundary: React.FC<ErrorBoundaryProps> = (props) => {
  return <ReactErrorBoundary {...props} />;
};
ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
