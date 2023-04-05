import React from "react";
import { Container } from "./style";
import ContentHeader from "../../pages/ContentHeader";

import SelectInput from '../../pages/SelectInput'
const Dashboard: React.FC = () => {
  
  const months = [
    { value: 7, label: "julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
  ];

  const options = [
    { value: 'maria', label: 'maria' },
    { value: 'joao', label: 'joao' },
    { value: 'luana', label: 'luana' },
  ];
  return (
    <Container>
    <ContentHeader title="Dashboard" lineColor="#F7931B">
      <SelectInput options={options} onChange={() => {}}/>
      

    </ContentHeader>
    </Container>
  );
};

export default Dashboard;
