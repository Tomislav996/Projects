import fetchGameResource from "./fetchGameResource";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useGameTrailer = (id: number) => {
  return fetchGameResource<Trailer>(id, "movies");
};

export default useGameTrailer;
