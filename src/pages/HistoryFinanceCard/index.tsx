import React from "react";
import { Container, Tag } from "./style";

interface IHistoryfinanceCardProps {
 
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

const HistoryfinanceCard: React.FC<IHistoryfinanceCardProps> = ({

  tagColor,
  title,
  subTitle,
  amount,
}) => {
  return <Container >
    <Tag color = {tagColor}/>
    <div>
        <span> {title}</span>
        <small>{subTitle}</small>
       
    </div>
    <h3>{amount}</h3>
  </Container>;
};

export default HistoryfinanceCard;
