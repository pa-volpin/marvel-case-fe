import React from 'react';
import { FaGhost } from 'react-icons/fa';


const NoDataWarning: React.FC = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="w-full container h-full flex justify-center items-center space-x-4">
        <FaGhost size={80} className="text-secondary" />
      </div>
    </div>
  )
}

export default NoDataWarning
