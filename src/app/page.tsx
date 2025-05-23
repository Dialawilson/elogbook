import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  HStack,
  Field,
  FieldRequiredIndicator,
  Checkbox,
  Button,
  Link,
} from "@chakra-ui/react";
import Logo from "@/img/logo.png";
import FrontPhoto from "@/img/building.jpg";
import Image from "next/image";
import { PasswordInput } from "@/components/ui/password-input";

export default function Home() {
  return (
    <Stack p={{md:"13rem"}} height={{md:"10vh"}}>
      <HStack
        bg={{ base: "green" }}
        height={"5rem"}
        align={"center"}
        justify={"center"}
      >
        <Image src={Logo} alt="logo" height={{base:"95rem"}} width={50} />
        <Text fontWeight={"bold"} color={"white"}>
          eLogBook
        </Text>
      </HStack>
      <Stack
        height={100}
        bgGradient="to-r"
        gradientFrom="green.100"
        gradientTo="green.300"
        mt={-2}
        mb={3}
      >
        <Image src={FrontPhoto} alt="frontPhoto" />
        <Text
          textTransform={{ base: "uppercase" }}
          fontWeight={500}
          px={{ base: "1.3rem" }}
          color={{ base: "green.800" }}
        >
          this is the record book for our IT students in MR-soft
        </Text>
        <Text
          fontWeight={"thin"}
          fontSize={{ base: "0.7rem" }}
          textTransform={"capitalize"}
          textAlign={{ base: "center" }}
        >
          the window to fill your logBook is from 7am - 7pm
        </Text>
        <Stack px={{ base: "1.3rem" }} py={{base:"2rem"}} gap={{base:"0.9rem"}}>
          <Field.Root required>
            <Field.Label>
              Email
              <FieldRequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Enter your email."
              variant="flushed"
              css={{ "--error-color": "green" }}
            />
            <Field.HelperText>We'll never share your email.</Field.HelperText>
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
          <Field.Root>
            <Field.Label>
              Password <FieldRequiredIndicator />
            </Field.Label>
            <PasswordInput
              variant="flushed"
              css={{ "--error-color": "green" }}
            />
            <Field.HelperText>
              We'll never share your password.
            </Field.HelperText>
            <Field.ErrorText>This field is required</Field.ErrorText>
          </Field.Root>
          <Flex gap={{base:"4rem"}}>
            <Stack>
              <Checkbox.Root>
                <Checkbox.HiddenInput />
                <Checkbox.Control bg={"green"}/>
                <Checkbox.Label>Remember me</Checkbox.Label>
              </Checkbox.Root>
            </Stack>
            <Stack>
              <Link variant="underline" href="" fontSize={15} target="_blank">Forgot password?</Link>
            </Stack>
          </Flex>
          <Flex gap={{base:"7.5rem"}} >
          <Button variant="solid" width={{base:"6rem"}} bg="green">Login</Button>
          <Button variant="outline" width={{base:"6rem"}} outlineColor={"green"}>Sign Up</Button>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
