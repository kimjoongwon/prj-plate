import React from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';
import { getMobxValue } from '@kimjwally/utils';
import { useMobxHookForm } from '../../hooks';
import { MobxProps } from '../../types';

interface RadioOption {
  label: string;
  value: any;
}
interface CocRadioGroupProps<T> extends MobxProps<T> {
  options: RadioOption[];
}

function _RadioGroup<T extends object>(props: CocRadioGroupProps<T>) {
  const { options, state, path = '', ...rest } = props;

  const initialValue =
    options?.find((option) => option.value === getMobxValue(state, path))
      ?.value || '';

  const { localState } = useMobxHookForm(initialValue, state, path);

  const onChange = action(
    (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
      localState.value = value;
    }
  );

  return (
    <MuiRadioGroup {...rest} value={localState.value} onChange={onChange}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio {...rest} />}
          label={option.label}
        />
      ))}
    </MuiRadioGroup>
  );
}

export const RadioGroup = observer(_RadioGroup);
