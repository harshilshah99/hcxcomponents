import React from 'react';

export default function LogoAndHeadings({ mainHeading, subHeading }) {
    return (
        <div>
            <img className="w-48 dark:block" src="https://i.ibb.co/W6Q61fB/swasth.png" alt="Logo" />
            <h1 className="mb-5 text-3xl font-bold text-black light:text-white sm:text-title-xl2">
                {mainHeading}
            </h1>
            <h2 className="mb-9 text-2xl font-bold text-black light:text-white sm:text-title-xl2">
                {subHeading}
            </h2>
        </div>
    );
}