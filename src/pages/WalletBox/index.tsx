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
       <CountUp 
             end={amount}
             prefix={'R$ '}
             decimal=','
             decimals={2}
       
       />
        <small> {footerLabel} </small>
         <img src= {iconSelected()} alt={title} />
      

    </Container>
  );
};

export default WalletBox;
