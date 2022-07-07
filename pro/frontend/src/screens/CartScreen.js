import { useEffect } from "react";
import {
  useParams,
  useSearchParams,
  useNavigate,
  Link as RouterLink,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Text,
  Grid,
  Heading,
  Box,
  Image,
  Link,
  Select,
  Button,
  Icon,
} from "@chakra-ui/react";
import { IoTrashBinSharp } from "react-icons/io5";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

//step 27 day 7 cartScreen
const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const { id: productId } = useParams();
  let qty = searchParams.get("qty");

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(qty, productId));
    }
  }, [dispatch, qty, productId]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Grid templateColumns="3">
      <Box>
        <Heading mb="8"> Shopping Cart </Heading>
        <Flex>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty.
              <Link as={RouterLink} to="/">
                Go Back
              </Link>
            </Message>
          ) : (
            <Grid templateColumns="4fr 2fr" gap="10" w="full">
              <Flex direction="column">
                {cartItems.map((item) => (
                  <Grid
                    key={item.product}
                    size="100%"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottom="1px"
                    borderColor="blackAlpha.500"
                    py="4"
                    px="2"
                    rounded="lg"
                    _hover={{ bgColor: "gray.100" }}
                    templateColumns="1fr 4fr 2fr 2fr 2fr"
                  >
                    {/* Product Image */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      borderRadius="lg"
                      height="14"
                      width="14"
                      objectFit="cover"
                    />
                    {/* Product Name */}
                    <Text fontWeight="semibold" fontSize="lg">
                      <Link as={RouterLink} to={`/product/${item.product}`}>
                        {item.name}
                      </Link>
                    </Text>
                    {/* Product Price */}
                    <Text fontWeight="semibold" fontSize="lg">
                      ₹ {item.price}
                    </Text>
                    {/* Quantity select box  */}
                    <Select
                      width="20"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(+e.target.value, item.product))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Select>
                    {/* Delete Button */}
                    <Button
                      type="Button"
                      colorScheme="red"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <Icon as={IoTrashBinSharp} />
                    </Button>
                  </Grid>
                ))}
              </Flex>

              <Flex
                direction="column"
                border="1px"
                borderWidth="2"
                borderColor="blackAlpha.500"
                rounded="md"
                padding="5"
                height="48"
                justifyContent="space-between"
              >
                <Flex direction="column">
                  <Heading as="h2" fontSize="2xl" mb="2">
                    Subtotal (
                    {cartItems.reduce(
                      (acc, currVal) => acc + (+currVal.qty || 1),
                      0
                    )}
                    {"  "} items)
                  </Heading>
                  <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    color="blue.600"
                    mb="4"
                  >
                    ₹{" "}
                    {cartItems.reduce(
                      (acc, currVal) =>
                        acc + (+currVal.qty || 1) * currVal.price,
                      0
                    )}
                  </Text>
                  <Button
                    type="button"
                    disabled={cartItems.length === 0}
                    size="lg"
                    colorScheme="teal"
                    bgColor="gray.800"
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </Button>
                </Flex>
              </Flex>
            </Grid>
          )}
        </Flex>
      </Box>
    </Grid>
  );
};

export default CartScreen;

// day 8 40:00 date 14/04/22
