import { Typography, TypographyProps } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

export interface TextProps extends TypographyProps {
  children: ReactNode;
}

function _Text(props: TextProps) {
  const { children = null, ...rest } = props;
  return <Typography {...rest}>{children}</Typography>;
}

export const Text = observer(_Text);
