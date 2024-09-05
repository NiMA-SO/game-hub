import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react'

interface Props{
    term: string;
    children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term , children } : Props) => {
  return (
    <Box marginY={5} w={'300px'} textAlign={'center'}>
        <Heading as={'dt'} fontSize={'lg'} color={'gray.600'} mb={'5px'}>{term}</Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItem