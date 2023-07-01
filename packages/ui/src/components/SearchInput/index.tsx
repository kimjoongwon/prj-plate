import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { observer } from 'mobx-react-lite';
import { MobxProps } from '../../types';
import { useMobxHookForm } from '../../hooks';
import { getMobxValue } from '@kimjwally/utils';
import { ChangeEvent } from 'react';

interface CoCSearchInputProps<T> extends MobxProps<T> {}

function CoCSearchInput<T extends {}>(props: CoCSearchInputProps<T>) {
  const { path = '', state = undefined } = props;

  const initialValue = getMobxValue(state, path);
  const { localState } = useMobxHookForm(initialValue, state, path);

  const onChangeSearchText:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => {
    localState.value = e.target.value;
  };

  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      }}
    >
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search'
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={onChangeSearchText}
        value={localState.value}
      />
    </Paper>
  );
}

export const SearchInput = observer(CoCSearchInput);
