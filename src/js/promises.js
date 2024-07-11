import React from 'react';

export const AddTaskstoAPI = () => {
    function fetchTask() {
        fetch (
            "https://playground.4geeks.com/todo/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    label: "something here",
                    is_done: false
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((body) => {
                setTask(body.task);
            });
    }
}