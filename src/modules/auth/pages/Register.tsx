import React from 'react';
import PaperContainerPrimary from '../../../design-system/containers/PaperContainerPrimary';
import Forms from '../components/register/Forms';
import Header from '../components/register/Header';

const bgImage = 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const Register: React.FC = () => {
  return (
    <div className="shadow-lg bg-gray-600 w-full h-screen flex justify-center items-center antialiased" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repat',backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
      <PaperContainerPrimary>
        <Header />
        <Forms />
      </PaperContainerPrimary>
    </div>
  );
};

export default Register;
