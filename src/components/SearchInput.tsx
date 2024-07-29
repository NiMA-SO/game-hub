import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
  onSearch: (searchText: string) => void;
}


const SearchInput = ({onSearch} : Props) => {

  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(ref.current) onSearch(ref.current.value)
      }}
    style={{width:"100%"}}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} placeholder="Search games..." variant="filled" rounded={20} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
