import { PaletteMode } from '@mui/material';
import { useContext } from 'react';
import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from '../../common/components/buttons/IconRadioButtonGroup';
import {
  DarkModeIcon,
  LightModeIcon,
  ListIcon,
  TableIcon
} from '../../common/components/icons/Icons';
import { Switch } from '../../common/components/switches/Switch';
import { ControlsContext, ViewType } from '../../contexts/ControlsContext';
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
