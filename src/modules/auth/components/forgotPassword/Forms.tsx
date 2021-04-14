import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IApplicationState } from '../../../../state/ducks';
import { forgotPassword, clearState } from '../../state/actions';
import { IPayloadPostForgotPassword } from '../../state/types';
import { isEmpty } from 'lodash';
import Loading from '../../../../design-system/components/Loading/Loading';

const Forms: React.FC = () => {
  const dispatch = useDispatch();
  const [forms, setForms] = useState({ email: '' });
  const [errorForms, setErrorForms] = useState({ email: true });
  const [showError, setShowError] = useState(false);

  const handleForgotPassoword = useCallback((payload: IPayloadPostForgotPassword) => dispatch(forgotPassword(payload)), []);

  const loading = useSelector((state: IApplicationState) => state.auth.loading);

  const clearAuthState = useCallback(() => dispatch(clearState()), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const regexForms: any = { email: /^\S+@\S+$/ };
    const validate = regexForms[name].test(value);
    setErrorForms((prev) => ({ ...prev, [name]: !validate }));
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  const submitForms = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errorForms.email) return setShowError(true);
    handleForgotPassoword(forms);
  };

  useEffect(() => {
    clearAuthState()
  }, []);

  return (
    <section>
    { loading && <Loading />}
    { !loading &&
        <form className="flex flex-col space-y-16" onSubmit={submitForms}>
          <div className="flex flex-col space-x-1">
            <label htmlFor="input-email">Email</label>
            <input
              id="input-email"
              name="email"
              type="text"
              value={forms.email}
              onChange={handleChange}
              className="rounded-md focus:outline-none p-2 text-primary"
              onKeyUp={() => setShowError(false)}
            />
            <p className={`${errorForms.email && showError ? '' : 'hidden'} text-secondary`}>
              Email should be like name@domain.com
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="submit"
              value="Recovery Password"
              className={`rounded-md focus:outline-none ${forms.email !== '' ? 'bg-secondary' : 'bg-gray-300'} text-lg p-2 cursor-pointer`}
              disabled={forms.email === ''}
            />
            <Link
              to="/login"
              className="rounded-md focus:outline-none bg-transparent border-secondary border-2 hover:bg-secondary text-lg p-2 text-center"
            >
              Back to Login
            </Link>
          </div>
        </form>
      }
    </section>
  );
};

export default Forms;
