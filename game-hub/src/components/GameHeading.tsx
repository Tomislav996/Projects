import { Heading } from "@chakra-ui/react";
import { usePages } from "../context/gamesContext";

const GameHeading = () => {
  const { gameQuery } = usePages();
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
