import Navbar from "@/components/Navbar";
import SideBar from "@/components/sideBar";
import { Box, Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Flex>
        <Box>
          <SideBar />
        </Box>
      </Flex>
    </>
  );
}
