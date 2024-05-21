import React from "react";

const Timeline: React.FC = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Q2 2024
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Launch of ZeusChain mainnet and ZeusToken (ZTK) distribution.
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Alongside the mainnet launch, the project&apos;s native
          cryptocurrency, ZeusToken (ZTK), will be distributed. This could
          involve distributing tokens to early investors, participants in a
          token sale, or as rewards for certain activities within the ecosystem.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Learn more{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Q3 2024
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Release of ZeusWallet and initial dApp ecosystem.
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          The ZeusWallet is a digital wallet specifically designed to store,
          send, and receive ZeusTokens (ZTK) and possibly other cryptocurrencies
          supported by ZeusChain.
        </p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Q1 2025
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Introduction of ZeusBridge for cross-chain interoperability.
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          ZeusBridge is a solution designed to enable cross-chain
          interoperability. This means it will allow ZeusChain to interact with
          other blockchain networks, facilitating the transfer of assets and
          data between different blockchains.
        </p>
      </li>
    </ol>
  );
};

export default Timeline;
