import React, { useState, useEffect } from 'react';
const RMModal = ({ milestoneId, isVisible, onClose }) => {
const milestones = {
    1:'The objective of TMT ACADEMY is clear, in addition to being one of the largest Spanish-speaking educational platforms where people talk about money, companies, banking, cryptos, tax havens, the stock market, etc., it is to have a community of rebels where they can see, understand and take advantage of the tools to be able to be outside the system. Being one step ahead is necessary today to take advantage of future events. All the teachers at the TMT Academy are people who were inside a system and today live lives outside of it.',
    2:'Construction of the entire TMT ACADEMY ecosystem.',
    3:'Beginning of the first recordings of the academy. Topical 10M Banking. Money. Cryptos. Taxes. Companies. AI. (Community members will participate in recordings). Date - TBD',
    4:'To beat the system nowadays you need to have certain tools. The TMT Academy team will conduct research with community holders in order to evaluate where they are and how they can benefit from the entire TMT ecosystem. Date - TBD',
    5:'Pre-launch of the TMT Academy platform and ecosystem, Members Only, before the official launch. Date - TBD',
    6:'Official launch of TMT ACADEMY The launch will take place in Miami in a private Meet-up with selected instructors and students. Date - TBD',
};
const [content, setContent] = useState('');
useEffect(() => {
    setContent(milestones[milestoneId] || 'Milestone not found'); // Default if id is invalid
}, [milestoneId]);

  return (
    <div
    className={`fixed inset-0 z-50 w-3/4 md:w-1/2 mx-auto mt-6 rounded-md text-center justify-center items-center bg-gray-200 bg-opacity-85 dark:bg-gray-900 dark:bg-opacity-85 transition-all ease-in-out duration-300 ${
      !isVisible && 'opacity-0 pointer-events-none'
    }`}
    >
        <p className="font-pop text-base mt-10 m-6 p-8">
            {content}
        </p>
        <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClose}
        >
        <span className="sr-only">Close</span>
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
  );
};
export default RMModal;