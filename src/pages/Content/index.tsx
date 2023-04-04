import React from 'react';
import { Container } from './style';



interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({children}) => {
  return (
    <Container>
    {children}
    </Container>
  );
};

export default Content;
