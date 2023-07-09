import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { getData } from "../helper";

const DestinationPage = () => {
  const {
    continent: seletedContinent,
    country: selectedCountry,
    destination: selectedDestination,
  } = useParams();

  const continent = getData(data.continents, seletedContinent);
  const country = getData(continent.countries, selectedCountry);
  const destination = getData(country.destinations, selectedDestination);

  return (
    <>
      <Heading p={8} my={8} textAlign="center" size="2xl">
        {destination.name}
      </Heading>
      <Flex w="80%" m="auto" gap={4}>
        <Box boxSize="xs" flexShrink={0}>
          <Image src={destination.image} w="full" h="full" />
        </Box>
        <Flex flexDir="column" p={4} gap={4}>
          <Text>
            <Text as="span" fontWeight="bold" color="purple.400">
              Destination:{" "}
            </Text>
            {destination.description}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" color="purple.400">
              Ratings:{" "}
            </Text>
            {destination.ratings}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" color="purple.400">
              Reviews:{" "}
            </Text>
            {destination.reviews}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" color="purple.400">
              Location:{" "}
            </Text>
            {destination.location}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" color="purple.400">
              Opening Hours:{" "}
            </Text>
            {destination.openingHours}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold" color="purple.400">
              Ticket Price:{" "}
            </Text>
            {destination.ticketPrice}
          </Text>
          <Link
            href={destination.website}
            isExternal
            fontWeight="bold"
            color="red.200"
          >
            Website
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default DestinationPage;
