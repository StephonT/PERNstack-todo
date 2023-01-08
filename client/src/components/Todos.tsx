import React from "react";
import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { FiCheckSquare, FiSquare, FiTrash, FiPlus } from "react-icons/fi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { client } from "../utils/client";
import { useNavigate } from "react-router-dom";


type Todo = {
  title: string;
  id: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

const Todos: React.FC = () => {
  //Once the plus button is pressed to create a todo, it will go to the newTodo page
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  //First request to the server
  // The <Todo[]> is letting typescript know the type for the array of todos from the database
  const { isLoading, data: todos } = useQuery<Todo[]>("todos", () =>
    client.get("todos").then((res) => res.data.todos)
  );

  //going into the server and calling .patch() to update the todo
  const toggleMutation = useMutation(
    (todo: Todo) =>
      client.patch(`/todos/${todo.id}`, {
        todo: { title: todo.title, done: !todo.done },
      }),
    {
      // when the mutation toggle happens, it validates all of the todos and updates the correct state for the todo that was just updated.
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const deleteMutation = useMutation(
    (todo: Todo) => client.delete(`/todos/${todo.id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );



  if (isLoading) {
    return null;
  }

  if (todos) {
    return (
      <Box mt="24" mx="auto">
        <Flex alignItems="center" justifyContent="center" pos="relative">
          <Box
            px="8"
            pt="6"
            pb="10"
            bgColor="gray.light"
            borderRadius="16px"
            experimental_spaceY="4"
          >
            {todos.map((todo) => (
              <Flex
                alignItems="center"
                justifyContent="space-between"
                experimental_spaceX="4"
              >
                <Icon
                  //once the todo is passed in here, it is passed to toggleMutation and allows it to toggle.
                  onClick={() => toggleMutation.mutate(todo)}
                  fontSize="2xl"
                  color="gray.light_dark"
                  cursor="pointer"
                  _hover={{ color: "gray.dark" }}
                  as={todo.done ? FiCheckSquare : FiSquare}
                />
                <Text color="gray.dark" fontSize="xl">
                  {todo.title}
                </Text>

                <Icon
                  onClick={() => deleteMutation.mutate(todo)}
                  color="red.300"
                  _hover={{ color: "red.700" }}
                  fontSize="2xl"
                  cursor="pointer"
                  as={FiTrash}
                />
              </Flex>
            ))}

            <IconButton
              color="gray.dark"
              bgColor="yellow.default"
              borderRadius="100%"
              aria-label="add-new-todo"
              size="lg"
              p="4px"
              pos="absolute"
              left="calc(50% - 24px)"
              cursor="pointer"
              _hover={{ bgColor: "yellow.dark" }}
              _active={{ bgColor: "yellow.light" }}
              as={FiPlus}
              onClick={() => navigate("/new")}
            />
          </Box>
        </Flex>
      </Box>
    );
  }

  //if error, return null
  return null;
};

export default Todos;
