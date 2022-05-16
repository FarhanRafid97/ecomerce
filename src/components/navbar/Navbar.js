import React from 'react';
import {
  Flex,
  Spacer,
  Box,
  Link,
  Container,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai';

const Navbar = ({ mobile }) => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const iconDark = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Flex bg={bgColor} padding="15px 0" borderBottom="2px solid black">
      <Container
        maxWidth="80%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexBasis="23%" alignItems="center" columnGap="5px">
          <Text fontSize={['sm', 'md', 'lg', 'xl']} fontWeight="light">
            VorteX
          </Text>
        </Flex>

        {!mobile && (
          <Flex flexBasis="40%" alignItems="center">
            <Input
              width="100%"
              marginRight="5px"
              borderColor="black"
              placeholder="Search items..."
              height="30px"
              borderRadius="2px"
              fontSize="12px"
            />
            <BsSearch />
          </Flex>
        )}
        <Flex
          flexBasis="25%"
          justifyContent="space-between"
          alignItems="center"
          fontWeight="light"
        >
          <Link as={ReachLink} to="/home" textDecoration="none">
            Home
          </Link>
          <Link as={ReachLink} to="/home">
            Home
          </Link>
          <Link as={ReachLink} to="/home">
            Home
          </Link>
          <Flex alignItems="center" fontSize="19px" columnGap="10px">
            <AiFillHeart />
            <Link to="shop">
              <AiOutlineShoppingCart />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
