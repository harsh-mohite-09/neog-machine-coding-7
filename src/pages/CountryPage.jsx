import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";
import ImgCard from "../components/ImgCard";
import { getData } from "../helper";

const CountryPage = () => {
  const { continent: seletedContinent, country: selectedCountry } = useParams();

  const continent = getData(data.continents, seletedContinent);
  const country = getData(continent.countries, selectedCountry);

  return (
    <Flex as="main" flexDir="column" p={8} mt={8} gap={8} textAlign="center">
      <Heading as="h2" size="lg">
        {`Top Destinations in ${selectedCountry} for your next holiday`}
      </Heading>
      <Flex m="auto" gap="3rem" mt={8}>
        {country.destinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/${seletedContinent}/${selectedCountry}/${destination.name}`}
          >
            <ImgCard img={destination.image} text={destination.name} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default CountryPage;
