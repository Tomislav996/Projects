import fetchGameResource from "./fetchGameResource";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useScreenshots = (id: number) => {
  return fetchGameResource<Screenshot>(id, "screenshots");
};

export default useScreenshots;
