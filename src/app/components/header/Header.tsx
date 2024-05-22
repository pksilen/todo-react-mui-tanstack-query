import { Badge } from 'app/common/components/badges/Badge';
import { SearchInput } from 'app/common/components/inputs/SearchInput';
import { Heading2 } from 'app/common/components/typography/Heading2';
import classes from './Header.module.scss';
import { useHeader } from './useHeader';

export const Header = () => {
  const { dispatch, undoneTodoCount } = useHeader();

  return (
    <header className={classes.todosHeader}>
      <Badge content={undoneTodoCount} color="error">
        <Heading2>Todos</Heading2>
      </Badge>
      <SearchInput
        className={classes.todoSearch}
        onChange={(event) =>
          dispatch({ type: 'SET_TODO_FILTER_TEXT', payload: event.target.value })
        }
        placeholder="Search todos..."
      />
    </header>
  );
};
