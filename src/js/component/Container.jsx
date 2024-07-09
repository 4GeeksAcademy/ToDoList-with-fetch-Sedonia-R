import React, { useState } from 'react';
import { TopInput } from './TopInput';
import { Tasks } from './Tasks';
import { Footer } from './Footer';

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
        <div className="row gx-0">
            <div className='paper-stack'>
                <TopInput inputValue={inputValue} setInputValue={setInputValue} handleInputEnter={handleInputEnter}/>
                <Tasks allTasks={allTasks} setAllTasks={setAllTasks}/>
                <Footer allTasks={allTasks}/>
            </div>
        </div>
    );
};