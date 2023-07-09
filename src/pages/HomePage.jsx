import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { data } from "../data";
import ImgCard from "../components/ImgCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { continents } = data;

  return (
    <Flex as="main" flexDir="column" p={8} mt={8} gap={8} textAlign="center">
      <Heading as="h1" size="2xl">
        Welcome to Trip Advisor
      </Heading>
      <Heading as="h2" size="lg" color="purple.400">
        Top Continents for your next holiday
      </Heading>
      <Flex m="auto" gap="3rem" mt={8}>
        {continents.map((continent) => (
          <Link key={continent.id} to={`/${continent.name}`}>
            <ImgCard img={continent.image} text={continent.name} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default HomePage;
