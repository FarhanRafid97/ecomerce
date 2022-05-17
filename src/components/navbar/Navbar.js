import React, { useEffect, useState } from 'react';
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
  const [stickyNav, setStickyNav] = useState(false);
  const scrollNav = () => {
    if (window.scrollY >= 40) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  if (navActive === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  window.addEventListener('scroll', scrollNav);
  useEffect(() => {
    console.log(navActive);
  }, [navActive]);

  return (
    <Flex
      position={!stickyNav ? 'absolute' : 'fixed'}
      padding="15px 0"
      zIndex="77"
      width="100%"
      bg={stickyNav ? bgColor : null}
      color={stickyNav ? 'black' : 'white'}
      transition="0.5s"
    >
      <Container
        maxWidth={['90%', '80%']}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}

        <Flex flexBasis={['18%', '23%']} alignItems="center" columnGap="5px">
          <Text fontSize={['10px', '20px']} fontWeight="light">
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
            height={['18px', '26px']}
            borderRadius="2px"
            fontSize={['8px', '12px']}
            color="white"
            _placeholder={!stickyNav ? { color: 'white' } : { color: 'black' }}
          />
          <BsSearch />
        </Flex>

        <Flex
          flexBasis={['18%', '25%']}
          justifyContent={['end', 'end', 'end', 'space-between']}
          alignItems="center"
          fontWeight="light"
        >
          {/* Nav menu */}
          {mobile ? (
            <Flex
              fontSize={['18px', '28px']}
              onClick={() => setNavActive(!navActive)}
            >
              <GiHamburgerMenu />
            </Flex>
          ) : (
            <>
              {navMenu.map((menu, index) => (
                <Link
                  key={index}
                  as={ReachLink}
                  to={menu.path}
                  textDecoration="none"
                  fontSize={['12px', '12px', '10px', '13px']}
                >
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

        {mobile && (
          <Flex
            position="absolute"
            width="100%"
            height="100vh"
            transition="1s"
            top={navActive ? '0' : '-100vh'}
            left="0"
            zIndex="99"
            color="black"
            onClick={() => setNavActive(!navActive)}
          >
            <Flex
              height="35vh"
              top={navActive ? '0' : '-100vh'}
              left="0"
              width="100%"
              bg="whiteAlpha.900"
            >
              <Flex
                position="absolute"
                right={['29px', '93px']}
                top="12px"
                fontSize={['28px', '34px']}
                onClick={() => setNavActive(!navActive)}
              >
                <AiOutlineClose />
              </Flex>
              <Flex
                flexDirection="column"
                margin="45px auto"
                marginTop={['45px', '90px']}
                rowGap="5px"
                textAlign="center"
              >
                {navMenu.map((menu, index) => (
                  <Link
                    key={index}
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
          </Flex>
        )}
      </Container>
    </Flex>
  );
};

export default Navbar;
