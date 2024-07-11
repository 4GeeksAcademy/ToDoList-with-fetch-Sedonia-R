import React from 'react';

export const DeleteButton = () => {
    return (
        <button 
            className='btn delete'
            onClick="deleteUser"
        >
            Clear All Tasks
        </button>
    );
};