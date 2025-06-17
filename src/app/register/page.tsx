"use client";
import Navbar from "@/components/Navbar";
import {
  Box,
  Flex,
  Text,
  Stack,
  Field,
  Input,
  useBreakpointValue,
  FieldRequiredIndicator,
  Portal,
  Select,
  createListCollection,
  Button,
} from "@chakra-ui/react";
// import { Select } from "@ark-ui/react";
import Image from "next/image";
import RegPhoto from "@/asset/img/training.jpg";
import FrontPhoto from "../../asset/img/building.jpg";


export default function Register() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const frameworks = createListCollection({
    items: [
      { label: "1 Month", value: "1 month" },
      { label: "2 Months", value: "2 months" },
      { label: "3 Months", value: "3 months" },
      { label: "6 Months", value: "6 months" },
      { label: "12 Months", value: "12 months" },
    ],
  });

  return (
    <>
      <Box minH="100vh" overflow="hidden">
        <Navbar />
        <Flex direction={{ base: "column", md: "row" }} h="calc(100vh -60px)">
          {!isMobile && (
            <Box
              position="relative"
              w="50%"
              h="89vh"
              overflow="hidden"
               border="2px solid red"
              bgGradient="linear(to-r, green.100, green.300"
            >
              <Image
              src={FrontPhoto}
              // src="../../asset/img/training.jpg"
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

              <Flex gap={10} w="full" direction={{ base: "column", md: "row" }}>
                <Field.Root required>
                  <Field.Label>
                    Name <Field.RequiredIndicator />
                  </Field.Label>
                  <Input variant="flushed" placeholder="Name:" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>
                    Surname <Field.RequiredIndicator />
                  </Field.Label>
                  <Input variant="flushed" placeholder="Surname:" />
                </Field.Root>
              </Flex>

              <Field.Root required>
                <Field.Label>
                  Institution <FieldRequiredIndicator />
                </Field.Label>
                <Input variant="flushed" placeholder="Institution" />
              </Field.Root>

              <Flex gap={10}>
                <Field.Root required>
                  <Field.Label>
                    Matriculation Number <FieldRequiredIndicator />
                  </Field.Label>
                  <Input variant="flushed" placeholder="Mat Number" />
                </Field.Root>

                <Field.Root>
                  <Select.Root
                    // key={variant}
                    collection={frameworks}
                  >
                    <Select.HiddenSelect />
                    <Select.Label>Duration of Internship </Select.Label>
                    <Select.Control>
                      <Select.Trigger>
                        <Select.ValueText placeholder="0 Months" />
                      </Select.Trigger>
                      <Select.IndicatorGroup>
                        <Select.Indicator />
                      </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                      <Select.Positioner>
                        <Select.Content variant="flushed">
                          {frameworks.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                              {framework.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Portal>
                  </Select.Root>
                </Field.Root>
              </Flex>

              <Flex>
                <Field.Root required>
                  <Field.Label>
                    Course of study <FieldRequiredIndicator />
                  </Field.Label>
                  <Input variant="flushed" placeholder="Course of study" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>
                    Year of course <FieldRequiredIndicator />
                  </Field.Label>
                  <Input variant="flushed" placeholder="Year of course" />
                </Field.Root>
              </Flex>
              <Flex gap={4} mt={4}>
                <Button
                  colorScheme="green"
                  flex={1}
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  Register
                </Button>
                <Button
                  variant="outline"
                  colorScheme="green"
                  flex={1}
                  onClick={() => (window.location.href = "/")}
                >
                  Login
                </Button>
              </Flex>
              {/* closing stack */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
