import SearchIcon from '@mui/icons-material/Search';
import {
  Badge,
  BadgeProps,
  InputAdornment,
  styled,
  TextField,
  Typography
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import ViewControlsContext from '../../contexts/ViewControlsContext';
import todoService from '../../services/FakeTodoService';
import classNames from './Header.module.scss';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '16px',
    padding: '2px 4px',
    right: -3,
    top: 15
  }
}));

export default function Header() {
  const [, dispatch] = useContext(ViewControlsContext);

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos
  });

  return (
    <header className={classNames.header}>
      <StyledBadge badgeContent={data?.length} color="error">
        <Typography variant="h2">Todos</Typography>
      </StyledBadge>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onChange={(event) =>
          dispatch({
            type: 'SET_TODO_FILTER_TEXT',
            payload: event.target.value
          })
        }
        placeholder="Search todos..."
        sx={{ flexGrow: 1, marginLeft: '40px' }}
        variant="standard"
      />
    </header>
  );
}
