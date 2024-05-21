import { Typography } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Heading2 = ({ children }: Props) => <Typography variant="h2">{children}</Typography>;
