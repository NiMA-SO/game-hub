import like from './../assets/Emoji/like.png'
import dart from './../assets/Emoji/dart.png'
import exceptional from './../assets/Emoji/expressionless.png'
import { Image, ImageProps } from '@chakra-ui/react';


interface Props{
    rating: number;
}


const Emoji = ({ rating } : Props) => {
    if(rating < 3) return null;

    const emojiMap : { [key: number]: ImageProps } = {
        3: { src: exceptional , alt:'exceptional',boxSize:"25px", mt:2 },
        4: { src: like , alt:'like',boxSize:"25px", mt:2 },
        5: { src: dart, alt:'dart',boxSize:"25px", mt:2 }
    }

  return (
    <Image {...emojiMap[rating]}  />
  )
}

export default Emoji