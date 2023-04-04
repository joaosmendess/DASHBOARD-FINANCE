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

  const years = [
    { value: 2023, label: 2023 },
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
  ];
  return (
    <Container>
    <ContentHeader title="Dashboard" lineColor="#F7931B">
      <SelectInput options={months}/>
      <SelectInput options={years}/>

    </ContentHeader>
    </Container>
  );
};

export default Dashboard;
