import { Checkbox as MuiCheckbox } from '@mui/material';

type Props = {
  readonly color: 'success';
  readonly isChecked: boolean;
  readonly onChange: () => void;
};

export const Checkbox = ({ color, isChecked, onChange, ...restOfProps }: Props) => (
  <MuiCheckbox checked={isChecked} color={color} inputProps={restOfProps} onChange={onChange} />
);
