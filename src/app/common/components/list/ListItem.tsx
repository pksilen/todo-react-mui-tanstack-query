import { ListItem as MuiListItem } from '@mui/material';
import React from 'react';

type Props = {
  readonly children: React.ReactNode;
  readonly className?: string;
};

export const ListItem = ({ children, className }: Props) => (
  <MuiListItem className={className}>{children}</MuiListItem>
);
