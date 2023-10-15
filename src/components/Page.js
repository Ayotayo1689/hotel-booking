


































import React, { useState, useEffect } from "react";
import { CloseIcon, ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import Nav from "./Nav";
import Banner from "./Banner";
import Trending from "./Trending";
import Offers from "./Offers";

function Page() {


  return (

<Flex  overflow="scroll" w={"100%"}  padding={{base:"0 10px",md:"0 10px", lg:"0 10px 0 0"}} >
<Box flex="1"  minW={"280px"} display={{base: 'none', md: 'none', lg: 'block'}} >

</Box>
<Box flex="5" w={"100%"} display="inline-block" overflowY="scroll"  padding={{ md: '0 10px', lg: ' 0px'}}>
<Nav/>
  <Banner/>
   <Trending title="Trending destinations" arrow={true} />
 <Offers/>
  <Trending title="Explore France"/>
</Box>

</Flex>
      );
}

export default Page;
