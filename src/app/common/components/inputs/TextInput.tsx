import { TextField } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  autoFocus?: boolean;
  className?: string;
  inputProps?: object;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}>;

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
