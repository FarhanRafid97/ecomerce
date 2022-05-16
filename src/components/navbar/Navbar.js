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
import { BsLightningCharge } from 'react-icons/bs';

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
        <Flex flexBasis="25%" alignItems="center" columnGap="5px">
          <Flex fontSize="20px" onClick={toggleColorMode}>
            <BsLightningCharge />
          </Flex>
          <Text fontSize={['sm', 'md', 'lg', 'xl']}>VorteX</Text>
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
              height="30px"
              borderRadius="none"
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
