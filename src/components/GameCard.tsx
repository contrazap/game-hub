import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden" height="100%">
        <Image src={game.background_image} />
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
