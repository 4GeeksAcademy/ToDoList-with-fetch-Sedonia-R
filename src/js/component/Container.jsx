import React, { useState } from 'react';
import { TopInput } from './TopInput';
import { Tasks } from './Tasks';
import { Footer } from './Footer';
import { DeleteButton } from './DeleteButton';

export const Container = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ allTasks, setAllTasks ] = useState([]);

    const handleInputEnter = (event) => {
        if(event.key == 'Enter'){
            setAllTasks([...allTasks, event.target.value]);
            setInputValue('');
        }
    }

    return (
        <div className="row gx-0 to-do">
            <div className='paper-stack'>
                <TopInput inputValue={inputValue} setInputValue={setInputValue} handleInputEnter={handleInputEnter}/>
                <Tasks allTasks={allTasks} setAllTasks={setAllTasks}/>
                <Footer allTasks={allTasks}/>
            </div>
            <DeleteButton/>
        </div>
    );
};