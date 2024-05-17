import { KeyboardEvent, useState } from 'react';
import { TextInput } from 'app/common/components/inputs/TextInput';
import classes from './EditTextInput.module.scss';

type Props = {
  readonly onEditComplete: (newText: string) => void;
  readonly text: string;
};

export const EditTextInput = ({ onEditComplete, text, ...restOfProps }: Props) => {
  const [editedText, setEditedText] = useState(text);

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onEditComplete(text);
    } else if (event.key === 'Enter') {
      onEditComplete(editedText);
    }
  };

  return (
    <TextInput
      autoFocus
      className={classes.titleInput}
      inputProps={{
        onBlur: () => onEditComplete(editedText),
        onKeyDown: handleInputKeyDown,
        ...restOfProps
      }}
      onChange={(event) => setEditedText(event.target.value)}
      value={editedText}
    />
  );
};
