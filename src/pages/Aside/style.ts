import styled from "styled-components";


export const Container = styled.div `

grid-area: AS;
background-color:${props =>props.theme.color.secondary};
padding-left: 20px;
border-right: 1px solid ${props => props.theme.color.gray};
`;

export const Header = styled.header `
display: flex;
align-items: center;
height: 70px;

`;
export const LogImg = styled.img `
height: 40px;
width: 40px;
`;

export const Title = styled.h3 `
color: ${props => props.theme.color.White};
margin-left: 1rem;


`;

export const MenuContainer = styled.nav `
display: flex;
flex-direction: column;


margin-top: 50px;
`;

export const MenuItemLink = styled.a `
color:  ${props => props.theme.color.info};
text-decoration: none;
margin: 7px 0;
display: flex;
align-items: center;
transition: opacity .3s;

&:hover{
    opacity: .7;

}

> svg {
    font-size: 18px;
    margin-right: 18px;
}
`;


export const MenuItemButton = styled.button `
font-size: 16px;
color:  ${props => props.theme.color.info};
border: none;
background: none;
margin: 7px 0;
display: flex;
align-items: center;
transition: opacity .3s;

&:hover{
    opacity: .7;

}

> svg {
    font-size: 18px;
    margin-right: 18px;
}
`;