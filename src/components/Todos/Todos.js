import React, {useEffect, useState} from 'react';
import {todoService} from "../../services";
import {Todo} from "./Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll()
            .then(({data}) => setTodos([...data]))
    }, [])

        return (
            <div>
                {todos.filter(item => item.completed !== true)
                    .map(item => <Todo key={item.id} todos={item}/>)}
            </div>
        );
};

export {Todos};