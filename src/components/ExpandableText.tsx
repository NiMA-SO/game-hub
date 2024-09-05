import { Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  const summary = children.substring(0, limit);

  if(!children) return null;

  if (children.length >= limit) {
    if (expanded == true) {
      return (
        <>
          <Text mt={'20px'} lineHeight={'35px'} fontSize={'17px'} wordBreak={"break-all"}>
            {children}
          </Text>
          <HStack mt={'10px'} justifyContent={'center'}>
            <Button onClick={() => setExpanded(false)}>Show Less</Button>
          </HStack>
        </>
      );
    } else if (expanded == false) {
      return (
        <>
        <Text mt={'20px'} lineHeight={'35px'} fontSize={'17px'} wordBreak={"break-all"}>
          {summary}...
        </Text>
        <HStack mt={'10px'} justifyContent={'center'}>
          <Button onClick={() => setExpanded(true)}>Read More</Button>
        </HStack>
        </>
      );
    }
  }
};

export default ExpandableText;
