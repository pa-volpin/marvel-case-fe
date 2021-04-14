import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close } from './state/actions';
import { Link } from 'react-router-dom';
import { IApplicationState } from '../../../state/ducks';
import history from '../../../state/History';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const FloatBox: React.FC = () => {
  const dispatch = useDispatch();
  const [mouseIsInside, setMouseIsInside] =useState(true);
  const [timer, setTimer] = useState(null);

  const closeBox = useCallback(() => dispatch(close()), []);

  const openStatus = useSelector((state: IApplicationState) => state.floatBox.open);
  const message = useSelector((state: IApplicationState) => state.floatBox.message); 
  const redirect = useSelector((state: IApplicationState) => state.floatBox.redirect);
  const timeToClose = useSelector((state: IApplicationState) => state.floatBox.timeToClose);
  const closeOption = useSelector((state: IApplicationState) => state.floatBox.closeOption);
  const tag = useSelector((state: IApplicationState) => state.floatBox.tag);

  const closeFloatBox = () => {
    closeBox()
    setMouseIsInside(true)
    setTimer(null);
    if (redirect !== '') history.push(redirect);
  }

  const closeBoxOut = () => {
    if (!mouseIsInside) closeFloatBox();
  };

  // useEffect(() => {
  //   if(timer !== null && !openStatus) clearTimeout(timer)
  //   if(openStatus) setTimer(setTimeout(() => closeFloatBox(), timeToClose))
  // }, [openStatus]);

  // if (openStatus && timeToClose) setTimeout(() => closeFloatBox(), timeToClose);
  // if (!openStatus) clearTimeout()


  return (
    <div
      className={ `${openStatus ? '' : 'hidden'} w-full h-full fixed left-0 top-0 bg-gray-200 bg-opacity-80 z-10 flex items-center justify-center` }
      onClick={() => closeBoxOut()}
    >
      <div
        className="bg-primary w-full m-2 h-2/5 md:w-1/3 md:max-w-10/12 relative rounded-md p-4 flex flex-col items-center justify-center z-20 text-white overflow-hidden space-y-5 text-center text-lg"
        onMouseOver={() => setMouseIsInside(true)}
        onMouseLeave={() => setMouseIsInside(false)}
      >
        <div className="p-2 w-full flex items-center justify-end absolute top-0 bg-white">
          <FaTimesCircle size={24} className="text-secondary cursor-pointer hover:bg-white rounded-full" onClick={ () => closeFloatBox() } />
        </div>
        <p>{ message }</p>
        <FaCheckCircle size={70} className={`${tag !=='success' && 'hidden'} text-white bg-green-600 rounded-full  border-4 border-white`} onClick={ () => closeFloatBox() } />
        <FaTimesCircle size={70} className={`${tag !=='error' && 'hidden'} text-white bg-secondary rounded-full border-4 border-white`} onClick={ () => closeFloatBox() } />
      </div>
    </div>
  );
};

export default FloatBox;