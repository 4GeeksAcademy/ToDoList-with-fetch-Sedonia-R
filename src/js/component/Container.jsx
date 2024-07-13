import React, { useState } from 'react';
import { Footer } from './Footer';

export const Container = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ allTasks, setAllTasks ] = useState([]);

    const handleInputEnter = (event) => {
        if(event.key == 'Enter'){
            setAllTasks([...allTasks, event.target.value]);
            setInputValue('');
            createNewListItem(event.target.value);
            getToDoList();
        }
    }

    function getToDoList() {
        fetch('https://playground.4geeks.com/todo/users/Sedonia', {   
            method: 'GET'
        })
        console.log('fetched to do list')
    }

    function createNewUser() {
        fetch('https://playground.4geeks.com/todo/users/Sedonia', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Sedonia'
            }),
        })
        .then(response => response.json())
        console.log('new user created')
    }

    function deleteUser() {
        fetch(
            "https://playground.4geeks.com/todo/users/Sedonia", {
                method: "DELETE",
            })
        let clearedList = [];
        setAllTasks(clearedList);
        console.log('deleted user')
    }

    function createNewListItem(item) {
        fetch('https://playground.4geeks.com/todo/todos/Sedonia', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "label": `${item}`,
                "is_done": false,
                "id": 44,
            }),
        })
        .then(response => response.json)
        console.log('created new list item')
    }

    function removeListItem(id) {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'DELETE',
            })
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
                    onKeyDown={
                        (event) => handleInputEnter(event)
                    }
                />
                {allTasks.map((_, index) => {
                    const removeItems = (index) => {
                        let data = [...allTasks];
                        data.splice(index, 1);
                        setAllTasks(data);
                        removeListItem(index + 10);
                        console.log('item removed');
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
            <div className='row'>
                <button className='btn newUser' onClick={createNewUser}>Create New User</button>
                <button className='btn delete' onClick={deleteUser}>Clear All Tasks</button>
            </div>
        </div>
    );
};