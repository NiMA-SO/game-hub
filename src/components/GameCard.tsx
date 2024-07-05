import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"


interface Props {
    game : Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} mx={"auto"}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard;