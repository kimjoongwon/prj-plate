import React, { useEffect } from 'react';
import { reaction } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { getMobxValue, setMobxValue } from '@kimjwally/utils';
import { MobxProps } from '../../types';

export type InputProps<T> = MobxProps<T> & TextFieldProps;

function _TextField<T extends object>(props: InputProps<T>) {
  const { path = '', state = {}, inputProps, ...rest } = props;

  const initialValue = getMobxValue(state, path);

  const localState = useLocalObservable(() => ({
    value: initialValue,
  }));

  useEffect(() => {
    const setterDisposer = reaction(
      () => localState.value,
      (value) => setMobxValue(state, path, value)
    );

    const getterDisposer = reaction(
      () => getMobxValue(state, path),
      (value) => {
        localState.value = value;
      }
    );

    return () => {
      setterDisposer();
      getterDisposer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localState.value = e.target.value;
  };

  return (
    <MuiTextField
      size='small'
      label='label'
      placeholder='placeholder'
      {...rest}
      inputProps={inputProps}
      onChange={onChange}
      value={localState.value}
    />
  );
}

export const TextField = observer(_TextField);
