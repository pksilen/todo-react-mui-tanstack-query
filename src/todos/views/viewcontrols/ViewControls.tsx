import { DarkMode, FormatListBulleted, GridOn, LightMode } from '@mui/icons-material';
import {
  FormControlLabel,
  PaletteMode,
  Switch,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { MouseEvent, useContext } from 'react';
import ViewControlsContext, { ViewType } from '../../contexts/ViewControlsContext';
import classNames from './ViewControls.module.scss';

export default function ViewControls() {
  const [{ themeOptions, viewType }, dispatch] = useContext(ViewControlsContext);

  function changeViewType(_: MouseEvent<HTMLElement>, newViewType: ViewType) {
    dispatch({ type: 'SET_VIEW_TYPE', payload: newViewType });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeViewMode(_: MouseEvent<HTMLElement>, newViewMode: PaletteMode) {
    dispatch({ type: 'SET_VIEW_MODE', payload: newViewMode });
  }

  return (
    <div className={classNames.container}>
      <ToggleButtonGroup exclusive onChange={changeViewType} size="small" value={viewType}>
        <ToggleButton aria-label="list" value="list">
          <FormatListBulleted />
        </ToggleButton>
        <ToggleButton aria-label="table" value="table">
          <GridOn />
        </ToggleButton>
      </ToggleButtonGroup>
      <FormControlLabel
        control={
          <Switch onClick={() => dispatch({ type: 'TOGGLE_SHOULD_SHOW_UNDONE_TODOS_ONLY' })} />
        }
        label="Show undone only"
      />
      <ToggleButtonGroup
        exclusive
        onChange={changeViewMode}
        size="small"
        value={themeOptions.palette?.mode}
      >
        <ToggleButton aria-label="light" value="light">
          <LightMode />
        </ToggleButton>
        <ToggleButton aria-label="dark" value="dark">
          <DarkMode />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
