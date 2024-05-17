import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';

type Props = {
  readonly label: string;
  readonly onClick: () => void;
};

export const Switch = ({ label, onClick }: Props) => (
  <FormControlLabel control={<MuiSwitch onClick={onClick} />} label={label} />
);
