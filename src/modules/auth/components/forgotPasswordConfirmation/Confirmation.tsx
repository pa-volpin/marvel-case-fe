import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IApplicationState } from '../../../../state/ducks';
import { forgotPasswordConfirmation } from '../../state/actions';
import { isEmpty } from 'lodash';
import Loading from '../../../../design-system/components/Loading/Loading';

const Confirmation: React.FC<RouteComponentProps> = (props) => {
  const { location: { pathname } } = props;
  const token = pathname.split('/forgotpassword/')[1];

  const dispatch = useDispatch();
  const confirm = useCallback(() => dispatch(forgotPasswordConfirmation()), []);
  
  const loading = useSelector((state: IApplicationState) => state.auth.loading);
  const email = useSelector((state: IApplicationState) => state.auth.data.email);

  useEffect(() => {
    if (token && isEmpty(email)) {
      localStorage.setItem('tokenMarvel', token);
      confirm();
    }
  }, []);

  return (
    <section>
    { loading && <Loading />}
    </section>
  );
};

export default withRouter(Confirmation);
