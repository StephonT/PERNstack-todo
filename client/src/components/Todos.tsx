import React from "react";
import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { FiCheckSquare, FiSquare, FiTrash, FiPlus } from "react-icons/fi";

const ourTodos = [
  {
    title: "Wash the dishes",
    done: false,
  },
  {
    title: "Clean the living room",
    done: true,
  },
  {
    title: "Pay the bills",
    done: false,
  },
];

const Todos: React.FC = () => {
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
          {ourTodos.map((todo) => (
            <Flex
              alignItems="center"
              justifyContent="space-between"
              experimental_spaceX="4"
            >
              <Icon
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
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Todos;
