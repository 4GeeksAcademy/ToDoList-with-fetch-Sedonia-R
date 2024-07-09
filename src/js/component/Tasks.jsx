import React, {useState} from 'react';

export const Tasks = ({allTasks, setAllTasks}) => {
    return(
        allTasks.map((input, index) => {
            const removeItems = (index) => {
                let data = [...allTasks];
                data.splice(index, 1);
                setAllTasks(data);
            };
            return(
                <div key={index}>
                    <ul className="input-field task shadows-into-light-regular p-0">
                        {allTasks[index]}
                        <button 
                            className='button shadows-into-light-regular'
                            onClick={() => removeItems(index)}
                        >
                            X
                        </button>
                    </ul>
                </div>
            )
        })
    )
};