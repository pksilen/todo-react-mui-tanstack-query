import { Badge as MuiBadge, BadgeProps as MuiBadgeProps, styled } from '@mui/material';
import React from 'react';

const StyledBadge = styled(MuiBadge)<MuiBadgeProps>(() => ({
  '& .MuiBadge-badge': {
    fontSize: '16px',
    padding: '2px 4px',
    right: -3,
    top: 15
  }
}));

type Props = Readonly<{
  children: React.ReactNode;
  color: 'error';
  content: React.ReactNode;
}>;

export const Badge = ({ children, color, content }: Props) => (
  <StyledBadge
    badgeContent={<span title="Undone todo count">{content}</span>}
    color={color}
    role="status"
  >
    {children}
  </StyledBadge>
);
