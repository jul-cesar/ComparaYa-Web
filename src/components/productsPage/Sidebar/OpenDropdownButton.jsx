import React from 'react'

const OpenDropdownButton = ({setOpenCategories, openCategories}) => {
  return (
    <button
        onClick={() => setOpenCategories(!openCategories)}
        type="button"
        className="flex items-center justify-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 mt-3 space-y-2"
        aria-controls="dropdown-example"
      >
        <svg
          className="flex-shrink-0 w-5  h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
        </svg>
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          Categorias
        </span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
  )
}

export default OpenDropdownButton