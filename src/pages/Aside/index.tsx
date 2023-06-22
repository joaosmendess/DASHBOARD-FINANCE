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
  ToggleMenu,
  ThemeToggleFooter
} from "./style";


import Toggle from "../Toggle";

import { Link } from "react-router-dom";


import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,  
  MdMenu
} from "react-icons/md";

const Aside: React.FC = () => {



  const {signOut }= useAuth();
  const {toggleTheme, theme }= useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)
  const [ darkTheme, setDarkTheme] = useState(() => theme.title=== 'dark' ? true : false)






const handleToggleMenu = () => {
  setToggleMenuIsOpened(!toggleMenuIsOpened)
}

const handleChangeTheme = () => {
  setDarkTheme(!darkTheme);
  toggleTheme();
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
        <MenuItemLink as={Link} to="/list/entry-balance" >
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
        <MenuItemButton onClick={signOut} as={Link} to="/">
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>

<ThemeToggleFooter menuIsOpen ={toggleMenuIsOpened}>

<Toggle
  labelLeft='Light'
  labelRight='Dark'
  checked={darkTheme}
  onChange={handleChangeTheme}
  
  />


</ThemeToggleFooter>


    </Container>
  );
};

export default Aside;
