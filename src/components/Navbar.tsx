import Logo from "@/asset/img/logo.png"
import {
    HStack,
    Text,

}from "@chakra-ui/react"
import Image from "next/image"
export default function Navbar(){
    return(
        // <>
        <HStack
        bg={{ base: "green" }}
        height={"5rem"}
        align={"center"}
        justify={"center"}
      >
        <Image src={Logo} alt="logo" height={50} width={50} />
        <Text fontWeight={"bold"} color={"white"}>
          eLogBook
        </Text>
      </HStack>
        // </>
    )
}