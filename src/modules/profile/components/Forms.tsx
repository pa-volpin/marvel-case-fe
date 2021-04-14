import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMe } from '../state/actions';
import { isEmpty } from 'lodash';
import InputName from './InputName';
import InputPassword from './InputPassword';

const Forms: React.FC = () => {
  const dispatch = useDispatch();

  const getUser = useCallback(() => dispatch(getMe()), []);

  useEffect(() => {
    getUser()
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      <InputName />
      <InputPassword />
    </div>
  );
};

export default Forms;
