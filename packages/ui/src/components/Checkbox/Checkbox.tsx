import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { getMobxValue } from '@kimjwally/utils';
import { useMobxHookForm } from '../../hooks';
import { MobxProps } from '../../types';

export interface CheckboxProps<T> extends MobxProps<T>, MuiCheckboxProps {}

function _Checkbox<T extends object>(props: CheckboxProps<T>) {
  const { path = '', state, inputProps, ...rest } = props;

  const { localState } = useMobxHookForm(
    getMobxValue(state, path),
    state,
    path
  );

  const onChange = action((_: any, checked: boolean) => {
    localState.value = checked;
  });

  return (
    <MuiCheckbox
      {...rest}
      onChange={onChange}
      inputProps={inputProps}
      value={localState.value}
    />
  );
}

export const Checkbox = observer(_Checkbox);
