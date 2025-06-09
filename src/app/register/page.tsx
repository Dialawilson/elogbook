"use client";
import Navbar from "@/components/Navbar";
import { Box, Flex, Text, Stack,Field, Input,HStack, useBreakpointValue, FieldRoot } from "@chakra-ui/react";
import Image from "next/image";
import FrontPhoto from "@/asset/img/training.jpg";


export default function Register() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Box minH="100vh" overflow="hidden">
        <Navbar />
        <Flex direction={{ base: "column", md: "row" }} h="calc(100vh -60px)">
          {!isMobile && (
            <Box
              position="relative"
              w="50%"
              h="100%"
              overflow="hidden"
              bgGradient="linear(to-r, green.100, green.300"
            >
              <Image
                src={FrontPhoto}
                alt="MR-Soft Building"
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                position="absolute"
                bottom={0}
                w="100%"
                h="70px"
                bgGradient="linear(to-t, green.500, transparent)"
              />
            </Box>
          )}

          {/* register section */}
          <Flex
            align="center"
            justify="center"
            w={{ base: "100%", md: "50%" }}
            p={{ base: "1.5rem", md: "2rem" }}
          >
            <Stack w="100%" maxW="400px" gap="1rem">
              <Text
                textTransform="uppercase"
                fontWeight={500}
                color="green.800"
                textAlign="center"
              >
                IT Students Registration Form
              </Text>
              <Flex gap={10} w="full" direction={{base:"column", md:"row"}}>
                <Field.Root required>
                  <Field.Label>
                    Name <Field.RequiredIndicator/>


                  </Field.Label>
                  <Input variant="flushed" placeholder="Name:"/>
                </Field.Root>
                <Field.Root required>
                  <Field.Label>
                    Surname <Field.RequiredIndicator/>
                  </Field.Label>
                  <Input variant="flushed" placeholder="Surname:"/>
                </Field.Root>
              </Flex>
              <Stack>
                <Field.Root required>
                <Field.Label>

                </Field.Label>
                </Field.Root>

            </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
