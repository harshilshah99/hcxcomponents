import React from 'react';

export default function Button({ onClick, disabled, children }) {
    return (
        <div className="mb-5">
            <button
                type="submit"
                onClick={onClick}
                disabled={disabled}
                className="align-center flex w-full justify-center rounded bg-blue-300 py-4 font-medium text-gray disabled:cursor-not-allowed disabled:bg-secondary disabled:text-gray"
            >
                {children}
            </button>
        </div>
    );
}