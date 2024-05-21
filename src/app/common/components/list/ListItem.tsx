import { ListItem as MuiListItem } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const ListItem = ({ children, className }: Props) => (
  <MuiListItem className={className}>{children}</MuiListItem>
);
