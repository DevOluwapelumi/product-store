import { Button, Container, Flex, HStack, Text, useColorMode, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
      py={4}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Container maxW="1140px">
        <Flex
          h={8}
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: "column", sm: "row" }}
        >
          {/* Logo */}
		  <Text
  fontSize={{ base: "22px", sm: "28px" }}
  fontWeight="bold"
  textTransform="uppercase"
  textAlign="center"
  bgGradient="linear(to-r, cyan.400, blue.500)"
  bgClip="text"
  cursor="pointer"
  _hover={{ textDecoration: "underline" }}
  position="relative"
  display="inline-block"
  animation="zigzag 2s linear infinite"
>
  <Link to="/">Product Store 🛒</Link>
</Text>

<style>
{`
  @keyframes zigzag {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10px, -10px);
    }
    50% {
      transform: translate(-10px, -10px);
    }
    75% {
      transform: translate(10px, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`}
</style>


          {/* Actions */}
          <HStack spacing={4} alignItems="center" mt={{ base: 4, sm: 0 }}>
            {/* Create Button */}
            <Link to="/create">
              <Button
                leftIcon={<PlusSquareIcon fontSize={20} />}
                colorScheme="blue"
                size="md"
                shadow="sm"
                _hover={{ transform: "scale(1.05)" }}
              >
                Create
              </Button>
            </Link>

            {/* Theme Toggle */}
            <Button
              onClick={toggleColorMode}
              size="md"
              colorScheme="teal"
              shadow="sm"
              _hover={{ transform: "scale(1.05)" }}
            >
              {colorMode === "light" ? <IoMoon size="20" /> : <LuSun size="20" />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
