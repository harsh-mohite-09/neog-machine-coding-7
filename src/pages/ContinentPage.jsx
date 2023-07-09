import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ImgCard from "../components/ImgCard";
import { data } from "../data";
import { getData } from "../helper";

const ContinentPage = () => {
  const { continent: seletedContinent } = useParams();
  const { continents } = data;

  const continent = getData(continents, seletedContinent);

  return (
    <Flex as="main" flexDir="column" p={8} mt={8} gap={8} textAlign="center">
      <Heading as="h2" size="lg">
        {`Top Countries in ${seletedContinent} for your next holiday`}
      </Heading>
      <Flex m="auto" gap="3rem" mt={8}>
        {continent.countries.map((country) => (
          <Link key={country.id} to={`/${seletedContinent}/${country.name}`}>
            <ImgCard img={country.image} text={country.name} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default ContinentPage;
