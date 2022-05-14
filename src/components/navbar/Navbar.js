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

const Navbar = ({ mobile }) => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const iconDark = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Flex bg={bgColor} padding="15px 0">
      <Container
        maxWidth="80%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexBasis="25%" alignItems="center" columnGap="5px">
          <Flex fontSize="20px" onClick={toggleColorMode}>
            {iconDark}
          </Flex>
          <Text fontSize={['sm', 'md', 'lg', 'xl']}>LMFAO Just Buy</Text>
        </Flex>
        <Flex flexBasis="25%" justifyContent="center">
          <Link as={ReachLink} to="/home">
            Home
          </Link>
        </Flex>

        {!mobile && (
          <Flex flexBasis="25%" alignItems="center">
            <Input
              width="200px"
              marginRight="5px"
              borderColor="black"
              placeholder="Search item..."
            />
            <IconButton
              aria-label="Search database"
              bg="gray.500"
              transition="0.5s"
              _hover={{ bg: 'teal.600', transition: '0.5s' }}
              icon={<SearchIcon color="gray.50" />}
            />
          </Flex>
        )}
      </Container>
    </Flex>
  );
};

export default Navbar;
