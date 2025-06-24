import {
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Popover,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Logo from "@/asset/img/logo.png";
import Image from "next/image";
import { FiCornerDownRight, FiFileText, FiGrid, FiSend } from "react-icons/fi";
import { FaMaximize } from "react-icons/fa6";

export default function SideBar() {
  return (
    <>
      <Flex direction="column" justifyItems="center">
        <Box h="100vh"  w="15rem" bgColor="green.50" justifyContent="center">
          <Box
            display="flex"
            h={39}
            mt={20}
            gap={4}
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            borderBottom="1px solid gray"
            

          >
            <Image src={Logo} alt="logo" width={70} />

            <Badge borderRadius={20}>Beta</Badge>
          </Box>
          <HStack
            // border="2px solid red"
            padding={20}
            flexDirection="column"
            textAlign="left"
            textTransform="capitalize"
          >
            <Link my={3}  px="0.5rem" py="1rem" borderRadius="0.5rem" _hover={{
                  bg:"green.300", textDecoration:"none"
                }}>
              <Flex gap={6}  alignItems="center" >
                <Icon>
                  <FiGrid />
                </Icon>
                <Box textAlign="left"  w="10rem" >

                <Text>dashboard</Text>
                </Box>
              </Flex>
            </Link>

            <Link my={3} py="1rem"   px="0.5rem" borderRadius="0.5rem" _hover={{
                  bg:"green.300", textDecoration:"none",
                
                }}>
              <Flex gap={6} alignItems="center">
                <Icon>
                  <FiFileText />
                </Icon> 
                <Box textAlign="left" w="10rem" >

                <Text>Add work details</Text>
                </Box>
              </Flex>
            </Link>
            <Link my={3} py="1rem"  px="0.5rem" borderRadius="0.5rem" _hover={{
                  bg:"green.300", textDecoration:"none"
                }}>
              <Flex gap={6} alignItems="center">
                <FiSend />
                <Box textAlign="left" border="1px soild red" w="10rem">

                <Text>Send Report</Text>
                </Box>
              </Flex>
            </Link>
          <Stack py="1rem" justifyItems="center" justifyContent="center" mt="1rem" px="0.5rem" borderRadius="0.5rem" _hover={{
                  bg:"green.300", textDecoration:"none"
                }}>
            <Popover.Root>
              <Popover.Trigger asChild>
                <Link>
                  <Flex gap={6} alignItems="center">

                    <Icon>
                      <FaMaximize />
                    </Icon>
                    <Box textAlign="left" border="1px solid red" w="10rem">
                    <Text>logout</Text>
                    </Box>
                  </Flex>
                </Link>
              </Popover.Trigger>
            </Popover.Root>
          </Stack>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}
