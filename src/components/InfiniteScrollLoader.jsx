import React from 'react'

const InfiniteScrollLoader = () => {
    return (
        <div className="grid-cols-mobile grid sm:grid-cols-16 gap-3 sm:gap-10 content-center mt-6">
            <div className="w-full">
                <div className="sm:h-[500px] h-[320px]  bg-white border border-gray-200 m-1 p-4 rounded-lg shadow animate-pulse">
                    <div className="h-64 bg-gray-300"></div>
                    <div className="px-6 py-4">
                        <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
                        <div className="h-2 bg-gray-300 w-full mb-2"></div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
                        <div className="h-2 bg-gray-300 w-1/2"></div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="sm:h-[500px] h-[320px]  bg-white border border-gray-200 m-1 p-4 rounded-lg shadow animate-pulse">
                    <div className="h-64 bg-gray-300"></div>
                    <div className="px-6 py-4">
                        <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
                        <div className="h-2 bg-gray-300 w-full mb-2"></div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
                        <div className="h-2 bg-gray-300 w-1/2"></div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="sm:h-[500px] h-[320px]  bg-white border border-gray-200 m-1 p-4 rounded-lg shadow animate-pulse">
                    <div className="h-64 bg-gray-300"></div>
                    <div className="px-6 py-4">
                        <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
                        <div className="h-2 bg-gray-300 w-full mb-2"></div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
                        <div className="h-2 bg-gray-300 w-1/2"></div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="sm:h-[500px] h-[320px]  bg-white border border-gray-200 m-1 p-4 rounded-lg shadow animate-pulse">
                    <div className="h-64 bg-gray-300"></div>
                    <div className="px-6 py-4">
                        <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
                        <div className="h-2 bg-gray-300 w-full mb-2"></div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
                        <div className="h-2 bg-gray-300 w-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfiniteScrollLoader