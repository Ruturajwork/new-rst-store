import { Box, Link, Image, Flex, Heading, Text } from "@chakra-ui/react";
import Rating from "./Rating";
import { Link as RouterLink } from "react-router-dom";

const Product = ({ Oproduct }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${Oproduct._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        maxW="sm"
        borderRadius="lg"
        overFlow="hiddden"
        bgColor="white"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        transition="all"
        _hover={{ shadow: "md" }}
      >
        <Image
          src={Oproduct.image}
          alt={Oproduct.name}
          minH="300px"
          objectFit="cover"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" fontSize="lg" mb="3">
            {Oproduct.name}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating
              value={Oproduct.rating}
              text={`${Oproduct.numReviews} Reviews`}
              color="yellow.500"
            />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ₹{Oproduct.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};
export default Product;
