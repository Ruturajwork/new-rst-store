import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "xl" }) => {
  return (
    <Flex
      direction="column"
      boxShadow="md"
      rounded="md"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      p="10"
      width={width}
    >
      {children}
    </Flex>
  );
};

export default FormContainer;
