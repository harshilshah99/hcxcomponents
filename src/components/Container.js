import React from 'react';

export default function Container({ children }) {
    return (
        <div className="m-8 border-stroke bg-white light:border-strokedark font-satoshi light:bg-black">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                {children}
            </div>
        </div>
    );
}