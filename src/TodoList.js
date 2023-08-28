import React from 'react';
import { List } from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <List>
        {todos.map((todo, index) => (
            <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />
        ))}
        </List>
    );
};

export default TodoList;
