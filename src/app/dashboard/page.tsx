import Navbar from "@/components/Navbar";
import SideBar from "@/components/sideBar";
import { Box, Flex,Stack,Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      {/* <Navbar /> */}
      <Flex gap={5} >
        <Box>
          <SideBar />
        </Box>
        <Stack px={3}>
          <Box border="1px solid #f4faf9" mt={10} w="60rem" borderTopRadius="1rem" px={3}>
            <Text>helleoekdem</Text>
          </Box>

        </Stack>
      </Flex>
    </>
  );
}
