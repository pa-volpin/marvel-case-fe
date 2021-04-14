import React, { useCallback, useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import { IProfilePayloadPostChangeName } from '../state/types';
import { changeName } from '../state/actions';
import { isEmpty } from 'lodash';

const InputName: React.FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [enable, setEnable] = useState(false);

  const name = useSelector((state: IApplicationState) => state.profile.data.name);
  const email = useSelector((state: IApplicationState) => state.profile.data.email);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const validate = !isEmpty(value);
    setError(!validate);
    setInput(value);
  };

  const changeNameAction = useCallback((payload: IProfilePayloadPostChangeName) =>
    dispatch(changeName(payload)), []);


  const handleDisable = () => {
    setEnable(false);
    setError(false);
    setShowError(false)
  };
  
  const handleSubmit = () => {
    if (!error && input !== '') {
      changeNameAction({ name: input, email });
      handleDisable()
    }
    
    if (error || input === '') setShowError(true)
  };

  useEffect(() => setInput(name), [name]);

  return (
    <div className="flex flex-col space-y-1 w-full">
      <label htmlFor="name-ipt">Name</label>
      <div className="flex space-x-2 w-full">
        <input
          id="name-ipt"
          type="text"
          value={ input }
          disabled={ !enable }
          onChange={ handleChange }
          className="rounded-md focus:outline-none p-2 text-primary w-10/12"
          onKeyUp={ () => setShowError(false) }
        />
        <div className="flex items-center justify-between">
          <FaEdit
            size={25}
            className={`${enable && 'hidden'} text-secondary cursor-pointer`}
            onClick={() => setEnable(true)}
          />
          <FaCheckCircle
            size={20}
            className={`${!enable && 'hidden'} text-green-800 cursor-pointer mr-2`}
            onClick={() => handleSubmit() }
          />
          <FaTimesCircle
            size={20}
            className={`${!enable && 'hidden'} text-secondary cursor-pointer`}
            onClick={() => handleDisable()}
          />
        </div>
      </div>
      <p className={`${showError ? '' : 'hidden'} text-secondary`}>
        Email should be like name@domain.com
      </p>
    </div>
  );
};

export default InputName;
