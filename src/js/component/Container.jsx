import React, { useState } from 'react';
// import { TopInput } from './TopInput';
// import { Tasks } from './Tasks';
import { Footer } from './Footer';
// import { DeleteButton } from './DeleteButton';

export const Container = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ allTasks, setAllTasks ] = useState([]);

    const handleInputEnter = (event) => {
        if(event.key == 'Enter'){
            setAllTasks([...allTasks, event.target.value]);
            setInputValue('');
        }
    }

    function deleteUser() {
        fetch (
            "https://playground.4geeks.com/todo/users/{user_name}", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    label: "delete user",
                    is_done: false
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((body) => {
                setAllTasks('');
            });
    }

    return (
        <div className="row gx-0 to-do">
            <div className='paper-stack'>
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
                {allTasks.map((_, index) => {
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
                })}
                <Footer allTasks={allTasks}/>
            </div>
            <button className='btn delete' onClick={deleteUser}>Clear All Tasks</button>
        </div>
    );
};