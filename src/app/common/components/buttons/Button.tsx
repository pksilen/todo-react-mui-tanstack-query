import { Button as MuiButton } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  variant?: 'text' | 'contained' | 'outlined';
}>;

export const Button = ({ children, className, onClick, variant }: Props) => (
  <MuiButton
    className={className}
    color="primary"
    onClick={onClick}
    variant={variant ?? 'contained'}
  >
    {children}
  </MuiButton>
);
