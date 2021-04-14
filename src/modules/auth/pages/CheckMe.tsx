import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../../design-system/components/Loading/Loading';
import { checkMe } from '../state/actions';

// import PaperContainerPrimary from '../../../design-system/containers/PaperContainerPrimary';
// import Loading from '../../../design-system/components/Loading/Loading';

// const bgImage = 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const CheckMe: React.FC = () => {
  const dispatch = useDispatch();
  const handleCheckMe = useCallback(() => dispatch(checkMe()), []);

  useEffect(() => {
    handleCheckMe();
  }, []);
  
  return <div className="w-screen h-screen"><Loading /></div>;
};

export default CheckMe;
