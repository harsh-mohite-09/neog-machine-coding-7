import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ImgCard = ({ img, text }) => {
  return (
    <Box boxSize="xs" pos="relative">
      <Image
        src={img}
        alt={text}
        w="full"
        h="full"
        objectFit="cover"
        borderRadius="xl"
        filter="brightness(75%)"
      />
      <Flex
        gap={2}
        alignItems="center"
        fontSize="1.2rem"
        position="absolute"
        bottom="1rem"
        left="1rem"
      >
        <FontAwesomeIcon icon={faLocationDot} />
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

export default ImgCard;
