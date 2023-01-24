import React from "react";

import { Container, Logo, Text } from "./stylesLoader";
import logo from "../../assets/logo-bg.png";

export const Loader = () => {
  return (
    <Container>
      <Logo src={logo} alt="" />
      <Text>
        <h1>TaHouse</h1>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </Text>
    </Container>
  );
};
