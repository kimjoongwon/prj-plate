import { observer } from 'mobx-react-lite';
import { Pagination as MuiPagination, PaginationProps } from '@mui/material';
import { MobxProps } from '../../../types';
import { useMobxHookForm } from '../../../hooks';
import { getMobxValue } from '@kimjwally/utils';

interface CoCPaginationProps<T> extends PaginationProps, MobxProps<T> {}

function CoCPagination<T extends object>(props: CoCPaginationProps<T>) {
  const { state = undefined, path = '', count = 18, ...rest } = props;

  const initialValue = getMobxValue(state, path);
  const { localState } = useMobxHookForm(initialValue, state, path);

  const onChangePage = (_: React.ChangeEvent<unknown>, page: number) => {
    const offset = page - 1;
    localState.value = offset;
  };

  const page = localState.value + 1;

  return (
    <MuiPagination
      {...rest}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: 80,
      }}
      onChange={onChangePage}
      count={count}
      page={page}
    />
  );
}

export const Pagination = observer(CoCPagination);
