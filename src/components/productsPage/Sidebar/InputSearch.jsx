import React, { useContext } from "react";

import { SidebarContext } from "../../../context/sidebarContext";

import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const { setQuery, query, noResults } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          disabled={noResults}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
          placeholder="Busca un producto"
          required
        />
      </div>
    </form>
  );
};

export default InputSearch;
