import { List as MuiList } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export const List = ({ children }: Props) => <MuiList>{children}</MuiList>;
