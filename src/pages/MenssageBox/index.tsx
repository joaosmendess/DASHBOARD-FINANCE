import React from 'react';
import { Container } from './style';





interface IMenssageBox {
    title: string;
    description: string ;
    footerText: string ;
    icon: string ;
}


const MenssageBox: React.FC <IMenssageBox> = ({
    title,
    description,
    footerText,
    icon
}) => {
  return (
    <Container>
   <header>
    <h1>{title}
         <img src={icon}
          alt={title} />
   </h1>
   <p>{description}</p>

   </header>

   <footer>
    <span> {footerText} </span>
   </footer>
    </Container>
  );
};

export default MenssageBox;
