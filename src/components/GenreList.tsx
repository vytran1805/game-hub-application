import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
//this prop passes a callback function
interface Props {
  // this onSelectedGenre function takes a Genre obj and returns void
  onSelectGenre: (genre: Genre) => void;
  // this attribute is used to highlight the selected genre
  selectedGenre: Genre | null;
}
const GenreList = ({
  selectedGenre,
  onSelectGenre: onSelectedGenre,
}: Props) => {
  const { data, isLoading, error } = useGenres();
  // if any error, display null
  if (error) return null;
  // if loading is true, display a Spinner
  if (isLoading) return <Spinner />;
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
            <Button
              whiteSpace="normal"
              textAlign="left"
              // if the genre id === selected genre id, make it bold, otherwish, normal
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              // set opacity = 0.8 when hovering over the genre name
              _hover={{ opacity: 0.8 }}
              onClick={() => onSelectedGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
