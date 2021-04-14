import React, { ReactChild } from 'react';

interface props {
  children: ReactChild
}
const BodyContainer: React.FC<props> = ({ children }: props) => {
  return (
    <div className="bg-white p-2 md:p-0 m-0 w-screen flex justify-center">
      <div className="max-w-6xl w-full">
        { children }
      </div>
    </div>
  );
};

export default BodyContainer;