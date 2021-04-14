import React from 'react';
import PaperContainerPrimary from '../../../design-system/containers/PaperContainerPrimary';
import Forms from '../components/Forms';
import Header from '../components/Header';

const Profile: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <PaperContainerPrimary>
        <Header />
        <Forms />
      </PaperContainerPrimary>
    </div>
  );
};

export default Profile;
