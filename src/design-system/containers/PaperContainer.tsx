import React from 'react';

interface props {
  children: React.ReactNode
}

const PaperContainer: React.FC<props> = ({ children }: props) => {
  return (
    <div className="bg-white rounded-md border-black p-2 relative">
      { children }
    </div>
  );
};

export default PaperContainer;