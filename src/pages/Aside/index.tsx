import React from "react";
import logoImg from "../../assets/logo.svg";
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton
} from "./style";


import { Link } from "react-router-dom";


import { useAuth } from "../../hooks/auth";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const Aside: React.FC = () => {

const {signOut }= useAuth();


  return ( 
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo da imagem" />
        <Title> Minha carteira </Title>
      </Header>

      <MenuContainer>
        <MenuItemLink as={Link} to = "/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink as={Link} to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink as={Link} to="/list/exit-balance" >
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
        <MenuItemButton onClick={signOut} as={Link} to="/">
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
