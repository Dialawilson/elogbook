"use client";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Field,
  FieldRequiredIndicator,
  Checkbox,
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { PasswordInput } from "@/components/ui/password-input";
import Navbar from "@/components/Navbar";
import FrontPhoto from "@/asset/img/building.jpg";

export default function Home() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box minH="100vh" overflow="hidden">
      <Navbar />
      <Flex direction={{ base: "column", md: "row" }} h="calc(100vh - 60px)">
        {/* Image Section - Hidden on mobile */}
        {!isMobile && (
          <Box
            position="relative"
            w="50%"
            h="100%"
            overflow="hidden"
            bgGradient="linear(to-r, green.100, green.300)"
          >
            <Image
              src={FrontPhoto}
              alt="MR-Soft Building"
              fill
              style={{ objectFit: "cover" }}
              priority
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

        {/* Login Form Section */}
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
              IT Student Logbook for MR-Soft
            </Text>
            <Text
              fontWeight="thin"
              fontSize="0.8rem"
              textAlign="center"
              mb={4}
            >
              Logbook submission window: 7am - 7pm
            </Text>

            <Field.Root required>
              <Field.Label>
                Email <FieldRequiredIndicator />
              </Field.Label>
              <Input
                placeholder="Enter your email"
                variant="flushed"
                // focusBorderColor="green.500"
              />
              <Field.HelperText>We'll never share your email.</Field.HelperText>
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Password <FieldRequiredIndicator />
              </Field.Label>
              <PasswordInput
                variant="flushed"
                // focusBorderColor="green.500"
                placeholder="Enter your password"
              />
              <Field.HelperText>
                We'll never share your password.
              </Field.HelperText>
            </Field.Root>

            <Flex justify="space-between" align="center">
              <Checkbox.Root defaultChecked>
                <Checkbox.Control />
                <Checkbox.Label>Remember me</Checkbox.Label>
              </Checkbox.Root>
              
              <Link href="/forgot-password" color="green.500" fontSize="sm">
                Forgot password?
              </Link>
            </Flex>

            <Flex gap={4} mt={4}>
              <Button
                colorScheme="green"
                flex={1}
                onClick={() => window.location.href = "/dashboard"}
              >
                Login
              </Button>
              <Button
                variant="outline"
                colorScheme="green"
                flex={1}
                onClick={() => window.location.href = "/register"}
              >
                Sign Up
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}