import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Card, CardHeader, CardBody, CardFooter, Text, Image, Stack, Divider, ButtonGroup, Button, Heading } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const {games , error} = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((res) => <li key={res.id}>{res.name}</li>)}
      </ul>
    </>
  );
};

export default GameGrid;
