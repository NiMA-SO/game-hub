import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const navigate = useNavigate();

  return (
    <Box width={{ base: "65%",sm:'80%', md: "100%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) setSearchText(ref.current.value);
          if (ref.current?.value !== "") {
            navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            placeholder="Search games..."
            variant="filled"
            rounded={20}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
