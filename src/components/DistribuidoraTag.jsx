import React from 'react'

const DistribuidoraTag = ({precio_exito, precio_olim, precio_d1}) => {
  return (
    <div className="flex items-center mt-2.5 mb-5">
    {precio_exito > 0 && (
      <span className="bg-blue-100 text-yellow-500 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200">
        Exito
      </span>
    )}
    {precio_d1 > 0 && (
      <span className="bg-blue-100 text-red-600 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200">
        D1
      </span>
    )}
    {precio_olim > 0 && (
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200">
        Olimpica
      </span>
    )}
  </div>
  )
}

export default DistribuidoraTag