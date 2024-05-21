import { TableCell as MuiTableCell } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children?: React.ReactNode;
  className?: string;
  onDoubleClick?: () => void;
}>;

export const TableCell = ({ children, className, onDoubleClick }: Props) => (
  <MuiTableCell className={className} onDoubleClick={onDoubleClick}>
    {children}
  </MuiTableCell>
);
