import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/file.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Join the revolution! We bring you elite crypto trading insights at
            the lowest price in India.<br/> Maximize profits, minimize risks—trade
            like a pro!
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["5", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
