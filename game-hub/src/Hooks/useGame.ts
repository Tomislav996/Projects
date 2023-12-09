import { Game } from "./useGames";
import { fetchSingleEntity } from "./useData";

const useGame = (slug: string) => {
  return fetchSingleEntity<Game>("games", slug);
};

export default useGame;
