import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement children={ <BsSearch/> }/>
        <Input placeholder="Search games..." variant="filled" rounded={20}/>
    </InputGroup>
  )
}

export default SearchInput