import styled, {css} from "styled-components";
interface IContainerProps {
    menuIsOpen : boolean;
}
export const Container = styled.div `

grid-area: MH;
background-color:${props =>props.theme.color.secondary};
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
border-bottom: 1px solid ${props => props.theme.color.gray};


@media (max-width: 600px) {
    background-color:${props =>props.theme.color.secondary};
   position: fixed;
   width: 100%;
   height: 70px;
   overflow: hidden;
   z-index: 2;

}

`;

export const Profile = styled.div `
color: ${props => props.theme.color.White};


`;
export const Welcome = styled.h3 `


`;
export const UserName = styled.span `


`;

