import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import classes from './ErrorBoundary.module.scss';

type Props = {
  children: ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => {
  const fallback = (
    <div className={classes.fallback}>
      <Typography variant="h3">Something went wrong.</Typography>
    </div>
  );

  return <ReactErrorBoundary fallback={fallback}>{children}</ReactErrorBoundary>;
};
