import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IApplicationState } from '../../../../state/ducks';
import { register, clearState } from '../../state/actions';
import { IPayloadPostRegister } from '../../state/types';
import { isEmpty } from 'lodash';
import Loading from '../../../../design-system/components/Loading/Loading';
import { FaEye } from 'react-icons/fa';

const Forms: React.FC = () => {
  const dispatch = useDispatch();
  const [seePassword, setSeePassword] = useState(false);
  const [forms, setForms] = useState({ name: '', email: '', password: '' });
  const [errorForms, setError] = useState({ name: true, email: true, password: true });
  const [showError, setShowError] = useState(false);

  const handleRegister = useCallback((payload: IPayloadPostRegister) => dispatch(register(payload)), []);
  const clearAuthState = useCallback(() => dispatch(clearState()), []);
  
  const loading = useSelector((state: IApplicationState) => state.auth.loading);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    const regexForms: any = { name: /^[A-Z][a-z][0-9]{3,}$/, email: /^\S+@\S+$/, password: /^.{6,}$/ };
    const validate = regexForms[name].test(value);
    setError((prev) => ({ ...prev, [name]: !validate }));
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  const submitForms = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errorForms.email || errorForms.password) return setShowError(true);
    handleRegister(forms);
  };

  useEffect(() => {
    clearAuthState();
  }, []);

  return (
    <section>
      { loading && <Loading />}
      { !loading  &&
        <form className="flex flex-col space-y-16" onSubmit={submitForms}>
          <div className="space-y-4">
            <div className="flex flex-col space-x-1">
              <label htmlFor="input-name">Name</label>
              <input
                id="input-name"
                name="name"
                type="text"
                value={forms.name}
                onChange={handleChange}
                className="rounded-md focus:outline-none p-2 text-primary"
                onKeyUp={() => setShowError(false)}
              />
              <p className={`${(errorForms.email && showError) ? '' : 'hidden'} text-secondary`}>
                Email should be like name@domain.com
              </p>
            </div>
            <div className="flex flex-col space-x-1">
              <label htmlFor="input-email">Email</label>
              <input
                id="input-email"
                name="email"
                type="email"
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
              <div className="flex space-x-2 items-center justify-between bg-white pr-2 rounded-md">
                <input
                  id="input-password"
                  name="password"
                  type={ seePassword ? 'text' : 'password' }
                  value={forms.password}
                  onChange={handleChange}
                  className="rounded-md focus:outline-none p-2 text-primary"
                  onKeyUp={() => setShowError(false)}
                />
                <FaEye className={`${seePassword ? 'text-secondary' : 'text-primary'} cursor-pointer`}  onClick={ () => setSeePassword(!seePassword) }/>
              </div>
              <p className={`${errorForms.password && showError ? '' : 'hidden'} text-secondary`}>
                Password must have at least 6 characters
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="submit"
              value="Sign Up"
              className={`rounded-md focus:outline-none ${(forms.email !== '' && forms.password !== '') ? 'bg-secondary' : 'bg-gray-300'} text-lg p-2 cursor-pointer`}
              disabled={forms.name === '' || forms.email === '' || forms.password === ''}
            />
            <Link
              to="/login"
              className="rounded-md focus:outline-none bg-transparent border-secondary border-2 hover:bg-secondary text-lg p-2 text-center"
            >
              Sign In
            </Link>
          </div>
        </form>
      }
    </section>
  );
};

export default Forms;
