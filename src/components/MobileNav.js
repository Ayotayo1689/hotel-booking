import React from 'react'
import User from "../images/user.jpg"
import {
    Box,
    Button,
    Input,
    Text,
    Flex,
    Image,
  } from "@chakra-ui/react";
import { DragHandleIcon, EditIcon, EmailIcon, ExternalLinkIcon, PhoneIcon, QuestionOutlineIcon, StarIcon } from '@chakra-ui/icons';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const MobileNav = () => {
  return (
   <Box zIndex={"999"} position={"fixed"} minW="100vw" display={{base:"block", md:"block", lg:"none"}} background={"#282c346a"}>
    
     <Box     bg={"white"} borderRadius={"0 15px 15px 0"} width={"260px"} h="100vh" paddingLeft={"20px"} >
        <Flex flexDir={"column"} mb={"50px"}  alignItems={"center"}>
        <Text fontWeight={"700"} fontSize={"20px"}>MimaBooking</Text>

<Box>
<Image src={User} alt='img' w={"100px"} p="3px" objectPosition={"center top"}  border={"1px solid #2D3253"} borderRadius={"50%"} objectFit={"cover"} h={"100px"}/>
<Flex position={"relative"} bottom="15px" left={"40px"} justifyContent={"center"} alignItems={"center"} color={"white"} bg="#2D3253" p={"3px"}  borderRadius={"50%"} h={"20px"} w={"20px"}>

    <EditIcon  h={"15px"} w={"15px"} />
</Flex >
</Box>
<Text fontSize={"20px"} fontWeight={"600"}>ilia jan</Text>
        </Flex>
        <Flex h={"20px"} mb={"20px"} alignItems={"center"} gap={"12px"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                <Box h="5px" w="5px" bg="#2D3253" borderRadius={"50%"}></Box>
                <HouseOutlinedIcon  />
            </Flex>
            <Text fontWeight={"800"}>
                Dashboard 
            </Text>
        </Flex>
        <Flex h={"20px"} mb={"20px"} alignItems={"center"} gap={"12px"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                <Box h="5px" w="5px" bg="#2D3253" borderRadius={"50%"} visibility={"hidden"}></Box>
                <WidgetsOutlinedIcon color={"disabled"}/>
            </Flex>
            <Text fontWeight={"500"}>
                Explore City
            </Text>
        </Flex>
        <Flex h={"20px"} mb={"20px"} alignItems={"center"} gap={"12px"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                <Box h="5px" w="5px" bg="#2D3253" borderRadius={"50%"} visibility={"hidden"}></Box>
                <MailOutlinedIcon  color={"disabled"}/>
            </Flex>
            <Text fontWeight={"500"}>
                Ticket
            </Text>
        </Flex>
        <Flex h={"20px"} mb={"20px"} alignItems={"center"} gap={"12px"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                <Box h="5px" w="5px" bg="#2D3253" borderRadius={"50%"} visibility={"hidden"}></Box>
                <FavoriteBorderOutlinedIcon  color={"disabled"}/>
            </Flex>
            <Text fontWeight={"500"}>
                Favorites
            </Text>
        </Flex>
        <Flex h={"20px"} mb={"20px"} alignItems={"center"} gap={"12px"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                <Box h="5px" w="5px" bg="#2D3253" borderRadius={"50%"} visibility={"hidden"}></Box>
                <SettingsOutlinedIcon  color={"disabled"}/>
            </Flex>
            <Text fontWeight={"500"}>
                Settings
            </Text>
        </Flex>


        <Flex  h={"20px"} position={"absolute"} bottom="20px" alignItems={"center"} gap={"12px"}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"5px"}>
                <Box h="5px" w="5px" bg="#2D3253" borderRadius={"50%"} visibility={"hidden"}></Box>
                <QuestionOutlineIcon/>
            </Flex>
            <Text fontWeight={"500"}>
                Logout
            </Text>
        </Flex>


        
    </Box>

   </Box>
  )
}

export default MobileNav