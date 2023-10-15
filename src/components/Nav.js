import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import React from 'react'

const Nav = () => {
  return (
    <Flex w={"100%"}  justifyContent={"space-between"} p={'0 20px'} alignItems={'center'} h={"70px"} bg={"white"} borderRadius={"15px"} >
      <Flex overflow="hidden" alignItems={"center"} gap={"10px"} h={'fit-content'}  borderRadius={"8px"} border={"1px solid gray"} pl={"9px"} w={'fit-content'}>

      <SearchIcon color='gray.300' />
    
    <Input border="none"  _focus={{ border: "none", outline: "none" }} width={"200px"} h="30px" type='tel' placeholder='Phone number' />
  </Flex>
  <Flex gap="7px" alignItems={"center"} justifyContent={"center"}>
    <Text>Saturday, may 3, 2023</Text>
    <Flex position={"relative"} bottom={"17px"} alignItems={"center"} justifyContent={"center"} bg={"red"} p="8px" color="white" w={"16px"} h={"16px"}  borderRadius={"50%"} >
        3
    </Flex>
    <NotificationsNoneIcon />
  </Flex>
    </Flex>
  )
}

export default Nav