import React from 'react';

export const Footer = ({allTasks}) => {
    return (
        <div 
        className='footer shadows-into-light-regular'>
            {allTasks.length} items left
        </div>
    )
}