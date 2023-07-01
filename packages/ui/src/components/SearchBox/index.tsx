import React from 'react';
import { IconButton, InputBase, Paper, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';
import SearchIcon from '@mui/icons-material/Search';

interface CoCSearchBoxProps {
  children?: React.ReactNode;
}

function CoCSearchBox(props: CoCSearchBoxProps) {
  const { children } = props;
  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>{children}</Stack>
    </Paper>
  );
}

export const SearchBox = observer(CoCSearchBox);
