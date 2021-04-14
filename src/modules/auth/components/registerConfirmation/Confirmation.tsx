import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Loading from '../../../../design-system/components/Loading/Loading';
import { IApplicationState } from '../../../../state/ducks';
import { registerConfirmation } from '../../state/actions';

const Confirmation: React.FC<RouteComponentProps> = (props) => {
  const { location: { pathname } } = props;
  const token = pathname.split('/register/')[1];
  if (token) localStorage.setItem('tokenMarvel', token);

  const dispatch = useDispatch();
  const confirm = useCallback(() => dispatch(registerConfirmation()), []);
  
  const loading = useSelector((state: IApplicationState) => state.auth.loading);

  useEffect(() => {
    if (token) confirm();
  }, []);

  return (
    <section>
      { loading && <Loading />}
    </section>
  );
};

export default withRouter(Confirmation);
