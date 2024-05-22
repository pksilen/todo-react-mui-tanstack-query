import { Pending } from '../../common/components/Pending';
import { Heading4 } from '../../common/components/typography/Heading4';
import classes from './Todos.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
  isPending: boolean;
}>;

export const PendingTodos = ({ children, isPending }: Props) => {
  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      {children}
    </Pending>
  );
};
