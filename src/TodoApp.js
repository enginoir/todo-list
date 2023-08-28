import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Container,
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  };

  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <ChakraProvider>
      <Container maxW="md" mt={10}>
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box bg="#1a202d" color="white" p={4} borderRadius="md">
            <Heading mb={4} textAlign="center">Chores ToDo List</Heading>
            <Input
              placeholder="Add a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              mb={4}
            />
            <Button colorScheme="blue" onClick={handleAddTodo}>
              Add Task
            </Button>
            <Box mt={4}>
              <span>Completed tasks: {completedCount}</span>
            </Box>
            <TodoList
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default TodoApp;
