import React from 'react';
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="gray.200" p={4}>
      <Flex alignItems="center">
        <Heading size="md">Your Logo</Heading>
        <Spacer />
        <Link href='/' mx={2}>Home</Link>
        <Link href='/search' mx={2}>Search</Link>
        <Link mx={2}>Services</Link>
        <Link mx={2}>Contact</Link>
      </Flex>
    </Box>
  );
};

export default Header;