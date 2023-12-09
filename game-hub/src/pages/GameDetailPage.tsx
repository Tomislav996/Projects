import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAtributtes from "../components/GameAtributtes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // when we put ! we are explicitely telling TypeScript that this variable will never be null

  if (isLoading) return <Spinner />;

  if (error) {
    throw error;
  }

  if (!game) return <Text>No game details found</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>
          {game.description_raw || "No description available"}
        </ExpandableText>
        <GameAtributtes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
