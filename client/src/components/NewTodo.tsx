import React, {useState} from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

const NewTodo: React.FC = () => {
const [title, setTitle] = useState("")

  return (
    <Box mt="24">
      <Box w="384px" mx="auto">
        <Text fontSize="20px" fontWeight="bold" color="gray.default">
          Title
        </Text>

        <Input
         value={title}
         onChange={(e) => setTitle(e.target.value)}
          mt="4"
          name="title"
          borderColor="gray.light"
          borderWidth="2px"
          focusBorderColor="gray.light_dark"
        />

        <Button
          mt="4"
          color="gray.dark"
          bgColor="yellow.default"
          _hover={{ bgColor: "yellow.dark" }}
          _active={{ bgColor: "yellow.light" }}
        >Add New Todo</Button>
      </Box>
    </Box>
  );
};

export default NewTodo;
