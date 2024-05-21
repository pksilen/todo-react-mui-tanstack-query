import { Checkbox as MuiCheckbox } from '@mui/material';

type Props = Readonly<{
  color: 'success';
  isChecked: boolean;
  onChange: () => void;
}>;

export const Checkbox = ({ color, isChecked, onChange, ...restOfProps }: Props) => (
  <MuiCheckbox checked={isChecked} color={color} inputProps={restOfProps} onChange={onChange} />
);
