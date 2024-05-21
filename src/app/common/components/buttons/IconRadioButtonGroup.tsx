import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';

export type IconRadioButtonProps<T extends string> = Readonly<{
  icon: React.ReactNode;
  onClick: () => void;
  value: T;
}>;

export type IconRadioButtonGroupProps<T extends string> = Readonly<{
  buttons: IconRadioButtonProps<T>[];
  initialValue: string;
}>;

export const IconRadioButtonGroup = <T extends string>({
  buttons,
  initialValue
}: IconRadioButtonGroupProps<T>) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeSelectedValue = (_: React.MouseEvent<HTMLElement>, value: any) => {
    setSelectedValue(value);
  };

  const iconRadioButtonElements = buttons.map(
    ({ icon, onClick, value }: IconRadioButtonProps<T>) => (
      <ToggleButton aria-label={value} key={value} onClick={onClick} value={value as string}>
        {icon}
      </ToggleButton>
    )
  );

  return (
    <ToggleButtonGroup exclusive onChange={changeSelectedValue} size="small" value={selectedValue}>
      {iconRadioButtonElements}
    </ToggleButtonGroup>
  );
};
