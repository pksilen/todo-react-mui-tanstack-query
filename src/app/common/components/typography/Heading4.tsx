import { Typography } from '@mui/material';

export type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Heading4 = ({ children }: Props) => <Typography variant="h4">{children}</Typography>;
