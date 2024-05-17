import { ListItemText as MuiListItemText } from '@mui/material';

type Props = {
  readonly className?: string;
  readonly onDoubleClick?: () => void;
  readonly text: string;
};

export const ListItemText = ({ className, onDoubleClick, text }: Props) => (
  <MuiListItemText className={className} onDoubleClick={onDoubleClick} primary={text} />
);
