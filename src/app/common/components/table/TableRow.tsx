import { TableRow as MuiTableRow } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export const TableRow = ({ children }: Props) => <MuiTableRow>{children}</MuiTableRow>;
