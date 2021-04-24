import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IApplicationState } from '../../../../state/ducks';
import { resetPassword, clearState } from '../../state/actions';
import { IPayloadPostResetPassword } from '../../state/types';
import history from '../../../../state/History';
import Loading from '../../../../design-system/components/Loading/Loading';
import { FaEye } from 'react-icons/fa';

const Forms: React.FC = () => {
  const dispatch = useDispatch();
  const [seePassword, setSeePassword] = useState(false);
  const [forms, setForms] = useState({ email: '', password: '' });
  const [errorForms, setErrorForms] = useState({ email: false, password: true });
  const [showError, setShowError] = useState(false);

  const handleResetPassword = useCallback((payload: IPayloadPostResetPassword) => dispatch(resetPassword(payload)), []);

  // const clearAuthState = useCallback(() => dispatch(clearState()), []);
  
  const loading = useSelector((state: IApplicationState) => state.auth.loading);
  const email = useSelector((state: IApplicationState) => state.auth.data.email);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const regexForms: any = { email: /^\S+@\S+$/, password: /^.{6,}$/ };
    const validate = regexForms[name].test(value);
    console.log(validate)
    setErrorForms((prev) => ({ ...prev, [name]: !validate }));
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  const submitForms = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errorForms.email || errorForms.password) return setShowError(true);
    handleResetPassword(forms);
  };

  useEffect(() => {
    if (!email) {
      history.push('/');
    } else {
      setForms((prev) => ({ ...prev, email }));
    }
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
                type="email"
                value={forms.email}
                className="rounded-md focus:outline-none p-2 text-primary"
                disabled
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
