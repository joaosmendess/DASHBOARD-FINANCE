import React from 'react';
import { Container } from './styles';
import dollarImg from '../../assets/dollar.svg'
import arrowDownImg  from '../../assets/arrow-down.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import CountUp from 'react-countup';
interface IwalletBoxProps {
    title: string;
    amount:number;
    footerLabel: string;
    icon: 'dollar'| 'arrowUp' | 'arrowDown' ;
    color: string;
}





const WalletBox: React.FC  <IwalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    icon, color
}) => {

const iconSelected = () => {
  switch (icon) {
    case 'dollar':
      return dollarImg
    case 'arrowUp':
      return arrowUpImg

    case 'arrowDown':
      return arrowDownImg
  
    default:
      null;
  }
}





  return (
    <Container color={color}>
        <span> {title} </span>
        <h1>
          <strong>R$</strong>
          
       <CountUp 
             end={amount}
             prefix={''}
             decimal=','
             decimals={2}
       
       />
       </h1>
        <small> {footerLabel} </small>
         <img src= {iconSelected()} alt={title} />
      

    </Container>
  );
};

export default WalletBox;
