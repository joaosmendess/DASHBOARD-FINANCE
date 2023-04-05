import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./style";
import ContentHeader from "../../pages/ContentHeader";
import SelectInput from "../../pages/SelectInput";
import HistoryfinanceCard from "../../pages/HistoryFinanceCard";
import { useParams } from "react-router-dom";

import gains from "../../repositories/gains";

import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/formatCurrency";


import formatDate from "../../utils/formatDate";

  interface IRouterParams {
    [key: string]: string | undefined;
}

interface IData {
  description: string;
  amountFormatted : string;
  frequency: string;
  dateFormatted : string;
  tagcolor : string;
  id: string ;
}

const List: React.FC = () => {

const [data, setData] = useState <IData[]> ([]);

const [monthSelected, setMonthSelected] = useState<string> (String(new Date ().getMonth() + 1));
const [yearSelected, setYearSelected] = useState<string> ((String(new Date ().getFullYear() )));


  const params = useParams<IRouterParams>();
  const { type } = params;

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const lineColor = useMemo (() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
  }, [type]);

  const listData = useMemo (() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type]);

  const months = [
    { value: 1, label: "Janeiro" },
    { value: 7, label: "julho" },
    { value: 5, label: "Maio" },
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
  ];

  useEffect(() => {

const filteredData = listData.filter(item => {
const date = new Date (item.date);
const month =String (date.getMonth() + 1) ;
const year =  String (date.getFullYear());

return month === monthSelected && year === yearSelected ;

});

const formattedData = filteredData.map(item => {




  return  {
    id: String(new Date().getTime) + item.amount,
    description: item.description,
    amountFormatted : formatCurrency(Number(item.amount)),
    frequency: item.frequency,
    dateFormatted : formatDate (item.date),
    tagcolor : item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
  }

})

       setData(formattedData)
  }, [listData, monthSelected, yearSelected]);


  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months}  onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years}  onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>

        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
       { 
       data.map(item => (
       
       <HistoryfinanceCard
       key={item.id}
          tagColor={item.tagcolor}
          title={item.description}
          subTitle={item.dateFormatted}
          amount={item.amountFormatted}
        />))
        }
      </Content>
    </Container>
  );
};

export default List;
