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
import { Switch } from 'app/common/components/inputs/Switch';
import { ViewType } from 'app/model/contexts/ControlsContext';
import classes from './Controls.module.scss';
import { useControls } from './useControls';

export const Controls = () => {
  const { setViewMode, setViewType, toggleShouldShowUndoneTodosOnly } = useControls();

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    {
      icon: <ListIcon />,
      onClick: () => setViewType('list'),
      value: 'list'
    },
    {
      icon: <TableIcon />,
      onClick: () => setViewType('table'),
      value: 'table'
    }
  ];

  const viewModeButtons: IconRadioButtonProps<PaletteMode>[] = [
    {
      icon: <LightModeIcon />,
      onClick: () => setViewMode('light'),
      value: 'light'
    },
    {
      icon: <DarkModeIcon />,
      onClick: () => setViewMode('dark'),
      value: 'dark'
    }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch label="Show undone only" onClick={toggleShouldShowUndoneTodosOnly} />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
