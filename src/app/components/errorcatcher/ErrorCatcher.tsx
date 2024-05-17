import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import classNames from './ErrorCatcher.module.scss';

type Props = {
  children: ReactNode;
};

export default function ErrorCatcher({ children }: Props) {
  const fallback = (
    <div className={classNames.fallbackContainer}>
      <Typography variant="h3">Something went wrong.</Typography>
    </div>
  );

  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
}
