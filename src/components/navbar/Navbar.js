import React, { useState } from 'react';
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
import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineClose,
} from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import navMenu from './navMenu';

const Navbar = ({ mobile }) => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.700');
  const iconDark = useColorModeValue(<MoonIcon />, <SunIcon />);
  const [navActive, setNavActive] = useState(false);

  return (
    <Flex
      bg={bgColor}
      position="relative"
      padding="15px 0"
      borderBottom="2px solid black"
    >
      <Container
        maxWidth={['90%', '80%']}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}

        <Flex flexBasis={['18%', '23%']} alignItems="center" columnGap="5px">
          <Text fontSize={['sm', 'md', 'lg', 'xl']} fontWeight="light">
            VorteX
          </Text>
        </Flex>

        {/* Search Bar */}
        <Flex
          flexBasis="45%"
          alignItems="center"
          columnGap="5px"
          fontSize="12px"
        >
          <Input
            width="100%"
            borderColor="black"
            placeholder="Search items..."
            height={['18px', '30px']}
            borderRadius="2px"
            fontSize={['8px', '12px']}
          />
          <BsSearch />
        </Flex>

        <Flex
          flexBasis={['18%', '25%']}
          justifyContent={['end', 'space-between']}
          alignItems="center"
          fontWeight="light"
        >
          {/* Nav menu */}
          {mobile ? (
            <Flex fontSize="20px" onClick={() => setNavActive(!navActive)}>
              <GiHamburgerMenu />
            </Flex>
          ) : (
            <>
              {navMenu.map((menu) => (
                <Link as={ReachLink} to={menu.path} textDecoration="none">
                  {menu.name}
                </Link>
              ))}

              <Flex alignItems="center" fontSize="19px" columnGap="10px">
                <AiFillHeart />
                <Link to="shop">
                  <AiOutlineShoppingCart />
                </Link>
              </Flex>
            </>
          )}
        </Flex>

        <Flex
          position="absolute"
          width="100%"
          height="35vh"
          transition="1s"
          top={navActive ? '-50vh' : '0'}
          left="0"
          zIndex="99"
          bg="whiteAlpha.900"
        >
          <Flex
            position="absolute"
            right="29px"
            top="10px"
            fontSize="32px"
            onClick={() => setNavActive(!navActive)}
          >
            <AiOutlineClose />
          </Flex>
          <Flex
            flexDirection="column"
            margin="45px auto"
            rowGap="5px"
            textAlign="center"
          >
            {navMenu.map((menu) => (
              <Link
                as={ReachLink}
                to={menu.path}
                fontSize="24px"
                fontWeight="light"
                textDecoration="none"
              >
                {menu.name}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
