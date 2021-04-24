import React, { useCallback, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../../state/ducks';
import { IProfilePayloadPostChangePassword } from '../state/types';
import { changePassword } from '../state/actions';
import { isEmpty } from 'lodash';
import { FaEye } from 'react-icons/fa';

const InputPassword: React.FC = () => {
  const dispatch = useDispatch();
  const [seeNewPassword, setSeeNewPassword] = useState(false);
  const [seeOldPassword, setSeeOldPassword] = useState(false);
  const [forms, setForms] = useState({ oldPassword: '', newPassword: '' });
  const [errorForms, setErrorForms] = useState({ oldPassword: true, newPassword: true });
  const [showError, setShowError] = useState(false);
  const [enable, setEnable] = useState(false);

  const email = useSelector((state: IApplicationState) => state.profile.data.email);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const regex = /^.{6,}$/;
    const validate = name === 'newPassword' ? regex.test(value) : !isEmpty(value);
    setErrorForms((prev) => ({ ...prev, [name]: !validate }));
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  const changePasswordAction = useCallback((payload: IProfilePayloadPostChangePassword) => dispatch(changePassword(payload)), []);

  const handleDisable = () => {
    setEnable(false);
    // setErrorForms(false);
    setShowError(false)
  };

  const handleSubmit = () => {
    if (!errorForms.newPassword && !errorForms.oldPassword && !isEmpty(email)) {
      changePasswordAction({ ...forms, email });
      handleDisable()
    }
    if (errorForms.newPassword || errorForms.oldPassword) setShowError(true)
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className={`flex flex-col space-y-1 w-full ${!enable ? 'hidden' : ' mt-4'}`}>
        <label htmlFor="oldpass-ipt">Old Passoword</label>
        <div className="flex space-x-2 items-center justify-between bg-white pr-2 rounded-md w-10/12">
          <input
            id="oldpass-ipt"
            name="oldPassword"
            type={ seeOldPassword ? 'text' : 'password' }
            value={forms.oldPassword}
            onChange={handleChange}
            disabled={ !enable }
            className="rounded-md focus:outline-none p-2 text-primary"
            onKeyUp={() => setShowError(false)}
          />
          <FaEye className={`${seeOldPassword ? 'text-secondary' : 'text-primary'} cursor-pointer`}  onClick={ () => setSeeOldPassword(!seeOldPassword) }/>
        </div>
        <p className={`${showError && errorForms.oldPassword ? '' : 'hidden'} text-secondary`}>
          You should enter your current password
        </p>
      </div>
      <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="newpass-ipt">Passoword</label>
        <div className="flex space-x-2">
          <div className="flex space-x-2 items-center justify-between bg-white pr-2 rounded-md w-10/12">
            <input
              id="newpass-ipt"
              name="newPassword"
              type={ seeNewPassword ? 'text' : 'password' }
              value={forms.newPassword}
              onChange={handleChange}
              disabled={ !enable }
              className="rounded-md focus:outline-none p-2 text-primary"
              onKeyUp={() => setShowError(false)}
            />
            <FaEye className={`${seeNewPassword ? 'text-secondary' : 'text-primary'} cursor-pointer`}  onClick={ () => setSeeNewPassword(!seeNewPassword) }/>
          </div>
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
        <p className={`${showError && errorForms.newPassword ? '' : 'hidden'} text-secondary`}>
          Password must have at least 6 characters
        </p>
      </div>
    </div>
  );
};

export default InputPassword;
