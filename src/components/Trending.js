import { Box, Flex, Image, Text, CSSReset  } from '@chakra-ui/react'
import React from 'react'
import uk from "../images/uk.jpg"
import turkey from "../images/turkey.jpg"
import france from "../images/france.jpg"
import italy from "../images/italy.jpg"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
const data = [
    {
        img: france,
        place:"Montmarte, France",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"450,000.00"
    },
    {
        img: turkey,
        place:"Istanbul, Turkey",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"600,000.00"
    },
    {
        img: uk,
        place:"London, Uk",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"360,000.00"
    },
    {
        img: italy,
        place:"Montmarte, Italy",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"360,000.00"
    },
    {
        img: italy,
        place:"Montmarte, Italy",
        star:"4",
        desc:"Visiting the beat tourist area chosen by the audience",
        amount:"360,000.00"
    }
]

const Trending = ({title, arrow}) => {
  return (
  <Box  mt="20px">
     {/* <CSSReset /> */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0;
          }
          ::-webkit-scrollbar-horizontal {
            display: none;
          }
        `}
      </style>

      
    <Flex justifyContent={"space-between"} alignItems={'center'}>
    <Text fontSize={"25px"} fontWeight={"500"} color={"#404156"}>{title}</Text>
  {
    arrow === true &&   <Flex gap="10px" >
    <Box display="flex" justifyContent={"center"} alignItems={'center'} h={"fit-content"} borderRadius={"5px"} border={".1px solid #2D3253"}><NavigateBeforeOutlinedIcon/></Box>
    <Box display="flex" justifyContent={"center"} alignItems={'center'} h={"fit-content"} borderRadius={"5px"}  border={".1px solid #2D3253"} background={"#2D3253"}><NavigateNextOutlinedIcon sx={{
                                color:"white"
                               }}/></Box>
                               
    </Flex>
  }
    </Flex>
    <Box display="inline-block"  w="100%"  overflow="scroll">
         <Flex maxW={"100%"} overflowY={"hidden"} gap={"20px"} >
         {
            data.map((place, index)=>{
                return(
                    <Flex  maxW={{base:"300px", md:"auto", lg:"auto"}} minW={"350px"} gap={"15px"} borderRadius={"15px"} bg={"white"} p={"12px 8px"} key={index} h={"fit-content"} w={{base:"250px",md:"300px", lg:"300px" }}>
                        <Image src={place.img} alt='img' w={"90px"}  objectPosition={"center top"} borderRadius={"15px"} objectFit={"cover"} h={"90px"}/>
                        <Flex  flexDir={"column"} w={"70%"}>
                            <Flex  justifyContent={"space-between"} >
                            <Text mt={"0"} mb={"0"} fontWeight={"800"} fontSize={"17px"} >{place.place}</Text>
                            <Flex h={"20px"} justifyContent={"center"} alignItems={"center"}>
                               <StarOutlinedIcon sx={{
                                color:"orange"
                               }}/> {place.star}/5
                            </Flex>
                            </Flex>
                            <Text mt={"5px"} mb={"5px"} fontSize={"13px"} color={"#CED3DC"}>{place.desc}</Text>
                            <Text mt={"0"} fontWeight={"600"} fontSize={"16px"} color={"#444B57"}>${place.amount}</Text>
                        </Flex>

                    </Flex>
                )
            })
        } 
    </Flex>

    </Box>
       <Flex mt="10px" gap="5px" justifyContent={"center"} alignItems={"center"}>
        <Box h={"7px"} borderRadius={"50%"} background={"#C0C7D2"} w={"7px"}>

        </Box>
        <Box h={"10px"} borderRadius={"50%"} background={"#2D3253"} w={"10px"}>

        </Box>
        <Box h={"7px"} borderRadius={"50%"} background={"#C0C7D2"} w={"7px"}>

        </Box>
    </Flex>

  </Box>
  )
}

export default Trending