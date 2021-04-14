import React from 'react';

interface props {
  children: React.ReactNode
}

const PaperContainerPrimary: React.FC<props> = ({ children }: props) => {
  return (
    <div className="bg-primary rounded-md border-black p-2 text-white">
      { children }
    </div>
  );
};

export default PaperContainerPrimary;