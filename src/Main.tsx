import React from 'react';
import BodyContainer from './design-system/containers/BodyContainer';
import Navbar from './design-system/components/Navbar/Navbar';
import PrivateRoutes from './PrivateRoutes';

const Main: React.FC = () => {
  return (
    <div className="w-screen max-w-screen">
      <Navbar />
      <BodyContainer>
        <PrivateRoutes />
      </BodyContainer>
    </div>
  );
};

export default Main;