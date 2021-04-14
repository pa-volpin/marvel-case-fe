import React from 'react'


const Loading: React.FC = () => {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="w-1/3 container h-full flex justify-center items-center space-x-4">
        <p className="w-5 h-5 rounded-full bg-secondary animate-loading-1"/>
        <p className="w-6 h-6 rounded-full bg-secondary animate-loading-2"/>
        <p className="w-7 h-7 rounded-full bg-secondary animate-loading-3"/>
        <p className="w-8 h-8 rounded-full bg-secondary animate-loading-4"/>
        <p className="w-9 h-9 rounded-full bg-secondary animate-loading-5"/>
      </div>
    </div>
  )
}

export default Loading
