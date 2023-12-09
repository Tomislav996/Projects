import { createContext, ReactNode, useContext, useState } from "react";
import { Genre } from "../Hooks/useGenres";
import { Platform } from "../Hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
  searchText: string;
}

interface PageContextProps {
  gameQuery: GameQuery;
  setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>;
  onSearch: (searchText: string) => void;
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string | null;
}

const GamesContext = createContext<PageContextProps | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const GamesProvider = ({ children }: Props) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const onSelectPlatform = (platform: Platform) =>
    setGameQuery({ ...gameQuery, platform });

  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <GamesContext.Provider
      value={{
        gameQuery,
        onSelectPlatform,
        setGameQuery,
        onSearch,
        onSelectGenre,
        selectedGenre: gameQuery.genre,
        selectedPlatform: gameQuery.platform,
        onSelectSortOrder,
        sortOrder: gameQuery.sortOrder,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

const usePages = () => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error("usePages must be used within a PagesProvider");
  }
  return context;
};

export { GamesProvider, usePages };
