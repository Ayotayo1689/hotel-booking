import "./App.css"
import React from "react";
import Todo from "./components/Page";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import MobileNav from "./components/MobileNav";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function App() {
   return (
     <Flex gap="20px" w="100%"  >
      <Sidebar/>
      <Page/>
     </Flex>
    );
}
export default App;