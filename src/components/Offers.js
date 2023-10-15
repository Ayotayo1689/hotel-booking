import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, Image, InputLeftElement, Text } from '@chakra-ui/react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import React from 'react'
import uk from "../images/uk.jpg"
import turkey from "../images/turkey.jpg"
import france from "../images/france.jpg"
import italy from "../images/italy.jpg"

const data = [
    {
        img: france,
        place:"7Seacons ApartMents",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"65,00",
        location:"Kensinton /London"
    },
    {
        img: turkey,
        place:"Along With The Villa",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"65,00",
        location:"Hungary /Budapest"
    },
    {
        img: uk,
        place:"Resort and Recreation",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"65,00",
        location:"Williamstreet /Boxon"
    },
    {
        img: italy,
        place:"Beautiful and Classy",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"65,00",
        location:"Kensinton /London"
    },
    {
        img: france,
        place:"Permanent Peace",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"65,00",
        location:"Kensinton /London"
    }
]

const Offers = () => {
  return (
   <Box width={"100%"}>
   <Flex justifyContent={"space-between"} alignItems={'center'}>
   <Text color={"#515265"} fontSize={"25px"} fontWeight={"500"}>
        Best Offers
    </Text>
    <Text color={"#73778D"}>
       View All
    </Text>
   </Flex>
   <Flex maxW={"1000px"} overflowY={"hidden"}  gap={"15px"} >
        {
            data.map((place, index)=>{
                return(
                    <Flex flexDir={"column"} minW={{base:"180px",md:"150px", lg:"150px"}} maxW="186px" gap={"6px"} borderRadius={"15px"} bg={"white"} p={"8px 8px 15px 8px "} key={index}  w={"300px"}>
                        <Image src={place.img} alt='img'   objectPosition={"center top"} borderRadius={"15px"} objectFit={"cover"} h={"80px"}/>
                        <Text mt={"10px"} mb={"0"} fontWeight={"700"} fontSize={"14px"} >{place.place}</Text>
                        <Flex  mt={"0px"} alignItems={'center'} >
                           <LocationOnOutlinedIcon color={"disabled"}/>
                            <Text mt={"5px"} mb={"5px"} fontSize={"13px"} color={"#CED3DC"}>{place.location}</Text>
                        </Flex>
                        <Flex mt={"0px"} justifyContent={"space-between"} alignItems={'center'} >
                           
                            <Text mt={"0px"} mb={"5px"} fontSize={"13px"} color={"#CED3DC"}><span style={{color:"black",fontWeight:"500",fontSize:"16px"}}>${place.amount}</span>/night </Text>
                            <FavoriteBorderOutlinedIcon sx={{
                                color:"#CED3DC",
                                height:"16px",
                                width:"16px",
                                border:".1px solid #CED3DC",
                                padding:"1px",
                                borderRadius:"5px"
                               }}/>
                        </Flex>

                    </Flex>
                )
            })
        }
    </Flex>

   </Box>
  )
}

export default Offers