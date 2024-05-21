import { ListItemIcon as MuiListItemIcon } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  icon: React.ReactNode;
}>;

export const ListItemIcon = ({ icon }: Props) => <MuiListItemIcon>{icon}</MuiListItemIcon>;
