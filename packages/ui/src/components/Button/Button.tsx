import { Button as MuiButton, ButtonProps } from '@mui/material';
import { observer } from 'mobx-react-lite';

function _Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return <MuiButton {...rest}>{children}</MuiButton>;
}

export const Button = observer(_Button);
