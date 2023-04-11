import styled from "styled-components";



export const Container = styled.div `



`


export const Content = styled.main `



`



export const Filters = styled.div `
width: 100%;
display: flex;
justify-content: center;

.tag-filter {
    font-size: 18px;
    font-weight: 500;

    background-color: transparent ;
    color:  ${props => props.theme.color.White};

    margin-bottom: 30px;
    margin: 0 10px;
    transition: opacity .3s;
    opacity: .5;

    :hover { 
        opacity: .7;
    }

   
}
.tag-filter-recurrent::after { 
        content: '';
        display: block ; 
        width: 55px;
        margin: 0 auto ;
        border-bottom: 10px solid ${props => props.theme.color.sucess};

    }  
    .tag-filter-eventual::after { 
        content: '';
        display: block ; 
        width: 55px;
        margin: 0 auto ;
        border-bottom: 10px solid ${props => props.theme.color.warning};

    }  

    .tag-actived {
        opacity: 1 ;
    }

`