import React from 'react';

const Modal = ({ isVisible, onClose }) => {
  return (
    
    <div
    className={`fixed inset-0 z-50 overflow-y-auto bg-gray-100 bg-opacity-75 transition-all ease-in-out duration-300 ${
      !isVisible && 'opacity-0 pointer-events-none'
    }`}
    >

      
      <div className="relative mx-auto items-center justify-center mt-16 p-1 bg-blue-300 rounded-lg shadow-lg w-1/2 h-3/4 pop">

        <div className="flex p-1">
          <div className="">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onClose}
            >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.707 3.307a1 1 0 00-1.414 1.414L10 11.293l5.293-5.293a1 1 0 00-1.414-1.414L11.293 10 5.993 4.707a1 1 0 00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            </button>
          </div>

          <div className="flex flex-wrap w-full mx-auto items-center justify-center p-1">
          <div><img className="z-10 fixed top-20 left-1/2 size-20" src='https://newcryptorder.com/img/logos/worm.svg' alt='Worm'/></div>
            <img className='mt-1 size-3/4' src='https://newcryptorder.com/img/logos/spine.svg' alt='The Rainbow Zine'/>
            <div className='z-10 flex columns-2 mx-auto items-center justify-center'>
              <div>
                <h1 className="text-xl font-poppins font-bold text-gray-900 dark:text-black ">Token Not Detected</h1>
                <h1 className="text-xl font-poppins text-gray-900 dark:text-black ">You Must Own a copy of<br />"The Rainbow Zine - Issue 01"<br />to access the reader!</h1>
              </div>
              <div>
                <img className='mt-0 size-52' src='https://newcryptorder.com/img/logos/floatinghead.svg' alt='The Rainbow Zine'/>
              </div>
            </div>
            <div><img className="z-0 fixed top-2/3 left-1/3 scale-75" src='https://newcryptorder.com/img/logos/clouds2.png' alt='Clouds'/></div>
            <div><img className="z-10 fixed top-2/3 left-1/2 scale-75" src='https://newcryptorder.com/img/logos/clouds1.png' alt='Clouds'/></div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Modal;
