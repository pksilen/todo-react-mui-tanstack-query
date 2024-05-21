import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';

type Props = Readonly<{
  label: string;
  onClick: () => void;
}>;

export const Switch = ({ label, onClick }: Props) => (
  <FormControlLabel control={<MuiSwitch onClick={onClick} />} label={label} />
);
