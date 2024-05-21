import { ListItemText as MuiListItemText } from '@mui/material';

type Props = Readonly<{
  className?: string;
  onDoubleClick?: () => void;
  text: string;
}>;

export const ListItemText = ({ className, onDoubleClick, text }: Props) => (
  <MuiListItemText className={className} onDoubleClick={onDoubleClick} primary={text} />
);
