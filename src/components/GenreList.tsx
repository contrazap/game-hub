import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  const handleSelectGenre = (genre: Genre) => {
    onSelectGenre(genre);
    setSelectedGenre(genre);
  };

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            {selectedGenre?.id === genre.id ? (
              <Button
                onClick={() => handleSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                colorScheme="blue"
              >
                {genre.name}
              </Button>
            ) : (
              <Button
                onClick={() => handleSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            )}
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
