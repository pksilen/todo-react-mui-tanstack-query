import { IconButton as MuiIconButton } from '@mui/material';
import React from 'react';

type Props = {
  readonly className?: string;
  readonly icon: React.ReactNode;
  readonly onClick?: () => void;
};

export const IconButton = ({ className, icon, onClick }: Props) => (
  <MuiIconButton className={className} onClick={onClick}>
    {icon}
  </MuiIconButton>
);
