import { PaletteMode } from '@mui/material';
import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from 'app/common/components/buttons/IconRadioButtonGroup';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from 'app/common/components/icons/Icons';
import { Switch } from 'app/common/components/switches/Switch';
import { ControlsContext, ViewType } from 'app/contexts/ControlsContext';
import { useContext } from 'react';
import classes from './Controls.module.scss';

export const Controls = () => {
  const [, dispatch] = useContext(ControlsContext);

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    {
      icon: <ListIcon />,
      onClick: () => dispatch({ type: 'SET_VIEW_TYPE', payload: 'list' }),
      value: 'list'
    },
    {
      icon: <TableIcon />,
      onClick: () => dispatch({ type: 'SET_VIEW_TYPE', payload: 'table' }),
      value: 'table'
    }
  ];

  const viewModeButtons: IconRadioButtonProps<PaletteMode>[] = [
    {
      icon: <LightModeIcon />,
      onClick: () => dispatch({ type: 'SET_VIEW_MODE', payload: 'light' }),
      value: 'light'
    },
    {
      icon: <DarkModeIcon />,
      onClick: () => dispatch({ type: 'SET_VIEW_MODE', payload: 'dark' }),
      value: 'dark'
    }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch
        label="Show undone only"
        onClick={() => dispatch({ type: 'TOGGLE_SHOULD_SHOW_UNDONE_TODOS_ONLY' })}
      />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
