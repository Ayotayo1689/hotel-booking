import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import BannerImg from "../images/banner.jpg"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Banner = () => {
  return (
   <>
    <Flex justifyContent={"center"} position={"relative"} mt={"20px"}  backgroundImage={`url(${BannerImg})`}  h={"150px"}  borderRadius={"15px"}  backgroundPosition="center"
    backgroundRepeat="no-repeat" backgroundSize={"cover"} >
      

    </Flex>
      <Flex  flexDir={{base:"column", md:"row", lg:"row"}} m="0 auto"  alignItems={{base:"stert", md:"center", lg:"center"}} p={"20px 15px"} position={"relative"} top={"-30px"} w={"85%"}  bg={"white"}  borderRadius={"15px"}>
      <Flex flex={"1"} fontSize={{base:"12px",md:"12px",lg:"1.2vw"}} padding={{base:"10px",md:"10px", lg:"0 15px 0 15px" }} borderRight={"1px solid black"} justifyContent={"space-between"} alignItems={"center"} color="#B0B8C7">
        <Flex gap={"10px"}  alignItems={"center"}>
        <LocationOnOutlinedIcon color={"disabled"}/>   Where Are You Going?
        </Flex>
          <KeyboardArrowDownOutlinedIcon color={"disabled"}/>
      </Flex>
      <Flex flex={"1"} fontSize={{base:"12px",md:"12px",lg:"1.2vw"}} padding={{base:"10px",md:"10px", lg:"0 15px 0 15px" }} borderRight={"1px solid black"} justifyContent={"space-between"} alignItems={"center"} color="#B0B8C7">
        <Flex gap={"10px"} alignItems={"center"}>
        <CalendarMonthOutlinedIcon color={"disabled"}/>   Check-in Date
        </Flex>
          <KeyboardArrowDownOutlinedIcon color={"disabled"}/>
      </Flex>
      <Flex position={"relative"} flex={"1"} fontSize={{base:"12px",md:"12px",lg:"1.2vw"}} padding={{base:"10px",md:"10px", lg:"0 15px 0 15px" }}  pl={"15px"} pr="15px" justifyContent={"space-between"} alignItems={"center"} >
        <Flex gap={"10px"} alignItems={"center"}>
        <PermIdentityOutlinedIcon />   3 adults
        </Flex>
          <KeyboardArrowDownOutlinedIcon color={"disabled"}/>
          <Button position={"absolute"} right={"0"} bg={"#4A4E73"} h={"44px"} p="0 20px" border={"none"} borderRadius={"15px"} color={"white"}>
              Search
          </Button>
      </Flex>

  </Flex></>
  )
}

export default Banner