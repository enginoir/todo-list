import React, { useState } from 'react';
import {
    ListItem,
    Checkbox,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Spacer,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const TodoItem = ({ todo, index, handleToggle, handleDelete, handleUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(todo.task);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setUpdatedTask(todo.task);
    };

    const handleConfirmEdit = () => {
        setIsEditing(false);
        handleUpdate(index, updatedTask);
    };

    return (
        <ListItem>
        <Checkbox
            borderColor={"#6f9d8c"}
            colorScheme='#6f9d8c'
            isChecked={todo.completed}
            onChange={() => handleToggle(index)}
        >
            {isEditing ? (
            <InputGroup size="sm">
                <Input
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
                />
                <InputRightElement>
                <IconButton
                    icon={<EditIcon />}
                    size="xs"
                    onClick={handleConfirmEdit}
                />
                <Spacer />
                <IconButton
                    icon={<DeleteIcon />}
                    size="xs"
                    onClick={() => handleDelete(index)}
                />
                </InputRightElement>
            </InputGroup>
            ) : (
            todo.task
            )}
        </Checkbox>
        {!isEditing && (
            <IconButton
            icon={<EditIcon />}
            size="xs"
            onClick={handleEditClick}
            ml={2}
            />
        )}
        </ListItem>
    );
};

export default TodoItem;