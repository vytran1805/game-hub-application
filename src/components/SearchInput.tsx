import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  // use Ref hook to get access to the value in this input field
  // Don't need useState cause we only have a simple form with a single input field
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //prevent the form from being posted to the server
        // if ref.current is truthy
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input //ref: associate ref obj to input components, variant: fills the placeholder
          ref={ref}
          borderRadius={20}
          placeholder="Search games here..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
