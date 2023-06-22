import React , {useState} from "react";
import logoImg from "../../assets/logo.svg";
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu
} from "./style";



import { Link } from "react-router-dom";


import { useAuth } from "../../hooks/auth";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,  
  MdMenu
} from "react-icons/md";

const Aside: React.FC = () => {

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)

const {signOut }= useAuth();


const handleToggleMenu = () => {
  setToggleMenuIsOpened(!toggleMenuIsOpened)
}


  return ( 
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>

       <ToggleMenu onClick={handleToggleMenu} >
        
       {toggleMenuIsOpened ? <MdClose/> : <MdMenu/>}

       </ToggleMenu>



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
