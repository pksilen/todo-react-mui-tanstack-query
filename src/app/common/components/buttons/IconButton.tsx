import { IconButton as MuiIconButton } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  className?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}>;

export const IconButton = ({ className, icon, onClick }: Props) => (
  <MuiIconButton className={className} onClick={onClick}>
    {icon}
  </MuiIconButton>
);
