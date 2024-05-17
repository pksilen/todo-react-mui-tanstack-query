import { TableCell as MuiTableCell } from '@mui/material';
import React from 'react';

type Props = {
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly onDoubleClick?: () => void;
};

export const TableCell = ({ children, className, onDoubleClick }: Props) => (
  <MuiTableCell className={className} onDoubleClick={onDoubleClick}>
    {children}
  </MuiTableCell>
);
