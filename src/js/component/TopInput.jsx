import React from 'react';

export const TopInput = ({inputValue, setInputValue, handleInputEnter}) => {

    return (
        <div>
            <input 
                className='input-field border-0 mb-0 shadows-into-light-regular'
                type="text"
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={
                    (event) => setInputValue(event.target.value)
                }
                onKeyDown={(event) => handleInputEnter(event)}
            />
        </div>
    );
}