import { IconButton } from 'app/common/components/buttons/IconButton';
import { EditIcon, RemoveIcon } from 'app/common/components/icons/Icons';
import { Checkbox } from 'app/common/components/inputs/Checkbox';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import { TableCell } from 'app/common/components/table/TableCell';
import { TableRow } from 'app/common/components/table/TableRow';
import { Todo } from 'app/model/Todo';
import classNames from 'classnames';
import classes from './TodoTableRow.module.scss';
import { useTodo } from './useTodo';

type Props = {
  readonly todo: Todo;
};

export const TodoTableRow = ({ todo: { id, title, isDone } }: Props) => {
  const { editMutation, isEditable, removeMutation, setIsEditable, toggleDoneMutation } =
    useTodo(id);

  const titleClasses = classNames(classes.title, isDone && classes.isDone);

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          aria-label={title}
          isChecked={isDone}
          color="success"
          onChange={toggleDoneMutation.mutate}
        />
      </TableCell>
      {isEditable ? (
        <TableCell>
          <EditTextInput onEditComplete={editMutation.mutate} text={title} />
        </TableCell>
      ) : (
        <TableCell className={titleClasses} onDoubleClick={() => setIsEditable(true)}>
          {title}
        </TableCell>
      )}
      <TableCell className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={() => setIsEditable(true)} />
        <IconButton icon={<RemoveIcon />} onClick={removeMutation.mutate} />
      </TableCell>
    </TableRow>
  );
};
