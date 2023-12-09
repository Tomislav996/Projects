import useGameTrailer from "../Hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (!data) return null;

  return (
    <>
      {data[0]?.data[480] ? (
        <video src={data[0].data[480]} poster={data[0].preview} controls />
      ) : null}
    </>
  );
};

export default GameTrailer;
