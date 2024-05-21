import { Table as MuiTable, TableBody } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
}>;

export const Table = ({ children }: Props) => (
  <MuiTable>
    <TableBody>{children}</TableBody>
  </MuiTable>
);
