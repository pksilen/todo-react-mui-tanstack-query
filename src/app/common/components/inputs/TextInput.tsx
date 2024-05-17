import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  readonly autoFocus?: boolean;
  readonly className?: string;
  readonly inputProps?: object;
  readonly label?: string;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
};

export const TextInput = ({ autoFocus, className, inputProps, label, onChange, value }: Props) => (
  <TextField
    autoFocus={autoFocus}
    className={className}
    InputProps={inputProps}
    fullWidth
    label={label}
    onChange={onChange}
    value={value}
    variant="standard"
  />
);
