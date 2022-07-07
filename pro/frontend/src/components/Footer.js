import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" py="5" bgColor="gray.200">
      <Text color="blackAlpha.800" size="3xl">
        Copyright 2022. Ruturaj Store
      </Text>
    </Flex>
  );
};

export default Footer;
