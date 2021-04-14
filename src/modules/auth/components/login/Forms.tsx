import { isEmpty } from 'lodash';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../../design-system/components/Loading/Loading';
import { IApplicationState } from '../../../../state/ducks';
import { login, clearState } from '../../state/actions';
import { IPayloadPostLogin } from '../../state/types';

const Forms: React.FC = () => {
  const dispatch = useDispatch();
  const [forms, setForms] = useState({ email: '', password: '' });
  const [errorForms, setErrorForms] = useState({ email: true, password: true });
  const [showError, setShowError] = useState(false);

  const handleLogin = useCallback((payload: IPayloadPostLogin) => dispatch(login(payload)), []);

  const clearAuthState = useCallback(() => dispatch(clearState()), []);
  
  const loading = useSelector((state: IApplicationState) => state.auth.loading);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const regexForms: any = { email: /^\S+@\S+$/, password: /^.{6,}$/ };
    const validate = regexForms[name].test(value);
    setErrorForms((prev) => ({ ...prev, [name]: !validate }));
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  const submitForms = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errorForms.email || errorForms.password) return setShowError(true);
    handleLogin(forms);
  };

  useEffect(() => {
    clearAuthState();
  }, []);


  return (
    <section>
      { loading && <Loading />}
      { !loading &&
        <form className="flex flex-col space-y-16" onSubmit={submitForms}>
          <div className="space-y-4">
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
            <div className="flex flex-col space-x-1">
              <label htmlFor="input-password">Password</label>
              <input
                id="input-password"
                name="password"
                type="text"
                value={forms.password}
                onChange={handleChange}
                className="rounded-md focus:outline-none p-2 text-primary"
                onKeyUp={() => setShowError(false)}
              />
              <p className={`${errorForms.password && showError ? '' : 'hidden'} text-secondary`}>
                Password must have at least 6 characters
              </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="submit"
            value="Sign In"
            className={`rounded-md focus:outline-none ${(forms.email !== '' && forms.password !== '') ? 'bg-secondary' : 'bg-gray-300'} text-lg p-2 cursor-pointer`}
            disabled={forms.email === '' || forms.password === ''}
          />
          <Link
            to="/register"
            className="rounded-md focus:outline-none bg-transparent border-secondary border-2 hover:bg-secondary text-lg p-2 text-center"
          >
            Sign Up
          </Link>
          <Link to="/forgotpassword" className="pb-2 text-md text-white">
            Forgot your password ?
          </Link>
        </div>
      </form>
      }
    </section>
  );
};

export default Forms;
