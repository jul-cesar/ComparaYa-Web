import React from 'react'

const LoaderComparationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
        <div className="px-3 py-1 text-lg font-medium leading-none text-center bg-gray-700-200  animate-pulse">
          Buscando...
        </div>
      </div>
  )
}

export default LoaderComparationPage