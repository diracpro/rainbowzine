import React, { useState } from 'react';

const FAQ = () => {
  const [expandedQuestions, setExpandedQuestions] = useState(new Set());

  const toggleQuestion = (index) => {
    setExpandedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const questions = [
    {
      question: 'What is an NFT?',
      answer:
        'An NFT (non-fungible token) is a unique digital item stored on a blockchain. NFTs can represent almost anything and serve as a digital record of ownership that operates through a blockchain.',
    },
    {
      question: 'What is an NFT minting?',
      answer:
        '“Mining” an NFT is the process of writing a digital item to the blockchain. This establishes its immutable record of authenticity and ownership.',
    },
    {
      question: 'What is a wallet?',
      answer:
        'A crypto wallet helps you buy, sell, and store your cryptocurrencies and (in many cases) your NFTs.',
    },
    {
      question: 'What is a smart contract?',
      answer:
        'A smart contract is a computer program that facilitates, secures, enforces and executes agreements recorded on the blockchain between two or more parties.',
    },
    {
      question: 'How to stay safe in web 3.0?',
      answer:
        'Web3 technology is still new and constantly evolving, so while there is no single action that will guarantee protection, there are best practices that can help. Never share your wallet seed phrase, be careful when taking actions with your wallet, and be sure to thoroughly evaluate NFTs before purchasing them.',
    },
    {
      question: 'What type of NFT are TMT-Rebels?',
      answer:
        'The NFTs of The Matrix Time are Subscription NFTs, which will provide benefits to their owners in the medium and long term that will help us understand the game of the system and use it to our advantage. Only a few will win!',
    },
  ];

  return (
    <div className="faq-section w-full text-center justify-center mx-60 mt-20"> {/* Set max-width and center the section */}
      <div className="w-full flex flex-wrap text-center justify-center">
        <h2 className="font-pop font-bold text-3xl py-9 text-center text-gray-800 dark:text-gray-200">FAQ</h2>
      </div>
      <div className="grid grid-cols-1 min-w-80 text-center justify-center">
        {questions.map((question, index) => (
          <div key={index} className="faq-item min-w-80 mb-8">
            <button
              className="w-full flex justify-between items-center text-xl font-medium py-4 px-4 border border-gray-700 rounded-t-lg focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => toggleQuestion(index)}
            >
              {question.question}
              {expandedQuestions.has(index) ? (
                <svg
                  className="h-6 w-6 text-gray-500 transform transition duration-300 ease-in-out group-hover:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500 transform transition duration-300 ease-in-out group-hover:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            {expandedQuestions.has(index) && (
              <div className="faq-answer px-4 py-4 border border-gray-700 rounded-b-lg bg-gray-100 dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-200">{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );


}

export default FAQ